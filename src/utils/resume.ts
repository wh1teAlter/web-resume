import type { UserInfo } from 'web-resume/config'
import type { ResumeInfo, ResumeItem } from '~/types'

/**
 * 获取文本内容
 * @param url
 */
export async function fetchText(url: string) {
  const txt = await fetch(url).then(res => res.text())
  return txt
}

export const resumeExamples: ResumeItem[] = [
  {
    // name: `${t('noun.worker')}`,
    title: '示例：打工人',
    url: 'https://fastly.jsdelivr.net/gh/wh1teAlter/web-resume/src/assets/resume/local.resume.yml',
    href: 'https://github.com/wh1teAlter/web-resume/blob/main/src/assets/resume/local.resume.yml',
  },
]

/**
 *
 * @param resumeInfo
 * @param userInfo
 * @returns
 */
export function overrideResume(resumeInfo: ResumeInfo, userInfo: UserInfo) {
  if (resumeInfo && resumeInfo.contact && userInfo.name) {
    if (resumeInfo.basics.name)
      resumeInfo.basics.name = userInfo.name

    if (resumeInfo.contact.phone && userInfo.phone) {
      resumeInfo.contact.phone.label = userInfo.phone
      resumeInfo.contact.phone.href = `tel:${userInfo.phone}`
    }

    if (resumeInfo.contact.email && userInfo.email) {
      resumeInfo.contact.email.label = userInfo.email
      resumeInfo.contact.email.href = `mailto:${userInfo.email}`
    }
  }
  return resumeInfo
}
