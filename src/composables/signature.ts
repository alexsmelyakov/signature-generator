import { Profile } from '@/types'

export const useSignature = (model: Profile): string => `
  <span>&nbsp;</span>
    <table
      border='0'
      cellpadding='0'
      cellspacing='0'
      style='font-family: Helvetica, Arial, sans-serif; font-size: 12px; border-collapse: separate!important; table-layout: fixed; line-height: 16px'
      width='320'
    >
      <tbody>
        <tr>
          <td align='center' valign='top' class='logo-td' style='text-align: center; padding: 4px 16px 4px 8px'>
            <img src="https://static.tildacdn.com/tild3638-6661-4866-b064-613964376434/signature-logo.png" width="80" alt="Smartup Technology">
          </td>
          <td align='left' valign='top' nowrap='nowrap' class='content-td' width='220'>
            <div class='content-pad' style="margin-bottom: 8px;">
              <span style='font-family: Helvetica, Arial, sans-serif; font-size: 12px; line-height: 16px; color: rgb(33, 33, 33); display: block;'>
                <span style='font-weight: bold; color: rgb(33, 33, 33); display: inline;font-size: 12px;' class='txt signature_name-target sig-hide'>
                  ${model.name}
                </span><br>
                <span style='color: rgb(33, 33, 33); display: inline;' class='txt signature_jobtitle-target sig-hide'>
                  ${model.position}
                </span><br>
                </span>
                <a class='link email signature_email-target sig-hide'
                  href='mailto:${model.email}'
                  style='color: #1976d2; text-decoration: none; display: inline;'>
                  ${model.email}
                </a>
                ${
                  model.phone
                    ? `
                      <span class='signature_email-sep sep' style='display: inline;'><br /></span>
                      <a class='link email signature_email-target sig-hide'
                        href='tel://${model.phone}'
                        style='#1976d2; text-decoration: none; display: inline;'
                      >${model.phone}</a>
                      </span>
                    `
                    : ''
                }
              </span>
            </div>
            <div>
              <span style='font-family: Helvetica, Arial, sans-serif; font-size: 12px; line-height: 16px; margin-bottom: 10px;'>
                <span style='font-weight: bold; color: rgb(33, 33, 33); display: inline;'
                  class='txt signature_companyname-target sig-hide'>Smartup Technology</span>
                  <br>
                <a class='link signature_website-target sig-hide' href='https://smartup.ru'
                  style='color: #1976d2; text-decoration: none; display: inline;'>www.smartup.ru</a>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <span>&nbsp;</span>
  `
