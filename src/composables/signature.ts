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
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1121">
              <g fill="#545454">
                <path
                  d="M530.7 19.6c-.3.3-.3 17.5-.1 38.2.6 51.4 2.3 241.9 2.6 283.6.1 24.9-.1 34.1-1 34.4-.6.2-6.2-2.8-12.4-6.6-6.2-3.7-12-7.2-12.8-7.6-.8-.4-2.4-1.2-3.5-1.9s-16.6-9.9-34.5-20.6c-17.9-10.6-33.6-20.1-35-21-1.4-.8-3.4-2.1-4.5-2.7-5.2-2.8-10.6-6-31.5-18.5-12.4-7.4-28.1-16.8-35-20.9-6.9-4-17-10.1-22.5-13.5-5.5-3.4-10.5-6.4-11-6.6-1.2-.5-30-17.6-49.8-29.6-7.5-4.5-14.2-8.3-14.7-8.3-.6 0-1-.5-1-1 0-.6-.4-1-1-1-.5 0-9.1-5-19.1-11-10-6-18.5-11-18.9-11-1.1 0-2.3 1.8-7 10.5-2.4 4.4-4.6 8.4-5 9-.4.5-2.5 4.4-4.7 8.5-4.8 9-10.7 20-13.8 25.5-2.2 3.9-5.5 10-12.8 23.5-1.9 3.6-4.9 9.2-6.7 12.5-1.8 3.3-4.9 8.9-6.8 12.5-1.9 3.6-4.5 8.1-5.6 10-1.2 1.9-3.2 5.9-4.6 8.7-1.4 2.9-2.8 5.3-3.2 5.3-.5 0-.8.4-.8.8 0 .5-2.4 5.3-5.3 10.8-10.5 19.4-13 24-16.1 29.9-1.7 3.3-3.4 6.1-3.8 6.3-.5.2-.8.8-.8 1.3s-2.4 5.3-5.4 10.6c-4.1 7.2-5.2 10.1-4.4 11 .6.7 1.4 1.3 1.8 1.3.6 0 11.7 5.9 33.5 18 2.8 1.5 8.4 4.5 12.5 6.8 4.1 2.2 11.3 6.1 15.9 8.6 4.7 2.5 8.8 4.6 9.3 4.6.4 0 .8.4.8 1 0 .5.4 1 1 1 .9 0 30.3 15.8 49 26.2 4.4 2.5 7.7 4.3 27.5 14.8 5.5 3 10.2 5.6 10.5 5.9.3.3 2.8 1.7 5.5 3.1 2.8 1.4 8.6 4.5 13 6.9 9.2 5.1 26.2 14.3 38.5 20.9 4.7 2.5 10.2 5.6 12.2 6.9 2.1 1.2 4 2.3 4.3 2.3.3 0 4.7 2.3 9.7 5.1 5.1 2.9 13.1 7.2 17.8 9.7 4.7 2.5 11 6 14.1 7.8 3.1 1.9 5.9 3.4 6.2 3.4.4 0 5.8 2.9 12.2 6.5 6.4 3.6 12 6.5 12.5 6.5.4 0 1.3.6 1.9 1.4 1.2 1.4.2 2.2-12.4 9.1-2.7 1.5-11.1 6.3-18.5 10.5s-15.5 8.8-18 10.2c-2.5 1.4-10.9 6.2-18.7 10.7-7.8 4.4-14.6 8.1-15.2 8.1-.5 0-1.1.3-1.3.8-.1.4-5.9 3.8-12.8 7.6s-15 8.4-18 10.2c-6.9 4-47.5 27-55.5 31.4-3.3 1.8-6.4 3.6-7 4-.5.4-5.3 3.1-10.5 6-17.4 9.6-20.2 11.2-25.2 14.1-2.7 1.6-5.3 2.9-5.8 2.9-.6 0-1 .4-1 .8s-1.5 1.5-3.2 2.3c-1.8.8-12.2 6.5-23 12.7-10.9 6.2-20.2 11.2-20.7 11.2s-1.1.4-1.3.8c-.4.9-24.2 14.6-36.5 20.9-3 1.5-5.3 3.4-5.3 4.3 0 .8 1.3 3.7 2.8 6.5 1.6 2.7 4.1 7.2 5.7 10 1.5 2.7 4.3 7.5 6.1 10.6 1.9 3.1 3.4 5.9 3.4 6.1 0 .3 3.2 6.1 7.1 12.9 8.9 15.4 14.6 25.6 16.2 28.9.6 1.4 1.4 2.7 1.7 3 .7.6 9.6 16.2 13.8 24 1.6 3 4.7 8.8 7 12.8 2.7 4.8 3.7 7.4 2.9 7.7-.7.2-16.9.6-36.2.8-36.1.5-38.2.7-53.5 5.4-28.4 8.7-54 30.5-67.8 57.8-5.1 10.2-10 27.8-11.1 40.1-2.2 24.1 4.2 50.9 16.8 70.9 10.7 17 27.5 32.1 46.1 41.5 8.4 4.2 27.6 9.8 37.8 11 5.5.6 82.9 1 211 1H530v16h206.9l.3-7.8.3-7.7 214.5-.6c139.4-.4 216.1-.9 219-1.6 16.8-3.8 34.8-11.5 46.3-19.9 50.7-37 62.4-106.7 26.6-158.3-12.9-18.6-36.6-35.9-57.9-42.3-16.4-4.9-17.5-5-61.7-5.5-31.3-.3-42.3-.8-42.3-1.6 0-.7 1.4-3.7 3.1-6.7 1.7-3 5.8-10.7 9.1-17 3.4-6.3 6.4-12 6.8-12.5.4-.6 3.1-5.5 6-11s6.3-11.8 7.5-14c1.2-2.2 4.5-8.3 7.3-13.5 2.7-5.2 6.4-12.2 8.2-15.5 1.8-3.3 5.3-9.8 7.8-14.5 2.4-4.7 5.5-10.3 6.8-12.6 1.2-2.2 2-4.5 1.6-5-.6-1-5-3.5-17.7-10.4-8.1-4.4-22.9-12.9-24-13.7-.5-.5-2.1-1.4-3.5-2-3.8-1.9-15-8.1-31.4-17.7-8.2-4.7-15.1-8.6-15.2-8.6-.2 0-3.8-2-8-4.5-4.1-2.5-7.7-4.5-8-4.5-.2 0-4.1-2.2-8.6-4.8-4.6-2.7-12.6-7.2-17.8-10.1-5.2-3-12.4-7-16-9.1-3.6-2.1-17.1-9.7-30-17-12.9-7.3-28.1-15.9-33.8-19.1-5.7-3.3-10.7-5.9-11.2-5.9-.6 0-1-.5-1-1 0-.6-.5-1-1.1-1-.6 0-4.1-1.8-7.7-3.9-5.4-3.2-40-22.8-62.2-35.3-14.3-8.1-14.1-8-12.9-9.4.6-.8 1.4-1.4 1.8-1.4.7 0 31.9-16.6 33.6-17.9.6-.5 5.7-3.3 11.5-6.4 5.8-3 13.8-7.4 17.9-9.6 4.1-2.3 7.6-4.1 7.8-4.1.3 0 3.5-1.7 7.1-3.9 7.4-4.3 52.2-28.6 61.7-33.5 3.3-1.7 6.2-3.3 6.5-3.6.3-.3 3.9-2.3 8-4.5 4.1-2.1 9.1-4.8 11-6 1.9-1.2 6.2-3.5 9.5-5.2 3.3-1.7 7.8-4.1 10-5.3 14.7-8.3 47.7-26 48.5-26 .6 0 1-.5 1-1 0-.6.4-1 .8-1s4.8-2.2 9.7-4.8c5-2.7 13.1-7 18-9.7 5-2.6 11.9-6.5 15.5-8.5 3.6-2 10.6-5.9 15.5-8.5 11.9-6.4 12.8-6.9 14.3-7.8 1-.7.3-2.6-2.7-8-2.1-4-6.1-11.5-8.9-16.7-2.7-5.2-7.8-14.7-11.2-21-3.4-6.3-8.5-15.8-11.2-21-2.8-5.2-6.5-12.2-8.3-15.5-1.8-3.3-4.7-8.7-6.5-12-1.8-3.3-5.1-9.4-7.3-13.5-11.1-20.4-17.7-33.2-17.7-34.1 0-.5-.4-.9-1-.9-.5 0-1-.4-1-.8 0-.5-5.4-10.9-12-23.2-6.6-12.3-12-22.6-12-22.9 0-.3-.7-1.4-1.4-2.3-1.2-1.6-2.5-1.1-16.2 6.8-8.2 4.7-18.6 10.8-23 13.5-4.5 2.7-8.7 4.9-9.3 4.9-.6 0-1.1.4-1.1 1 0 .5-.4 1-1 1-.5 0-4.9 2.4-9.7 5.3-4.9 3-10.9 6.5-13.3 7.9-2.5 1.4-12.4 7.2-22 12.8-9.6 5.7-19.5 11.4-22 12.8-2.5 1.4-10 5.8-16.8 9.8-6.8 4.1-12.5 7.4-12.7 7.4-.2 0-5.6 3.1-12 7-6.4 3.8-11.7 7-11.9 7-.2 0-3.5 1.9-7.2 4.2-3.8 2.3-12.3 7.3-18.9 11.1-16.4 9.5-18 10.4-21.9 12.6-1.8 1-6.6 3.9-10.7 6.4-4.1 2.4-9.4 5.5-11.9 6.9-11.1 6.2-26.5 15.3-27 15.9-.3.3-2.3 1.6-4.5 2.7s-11 6.1-19.5 11.1-16.1 9.1-16.9 9.1c-1.2 0-1.3-6-.8-40.8 1.3-82 3-312.9 2.4-314.5-.6-1.6-7.8-1.7-103-1.7-56.4 0-102.7.3-103 .6zm2.7 735c0 7.4-.5 102.5-.4 104.1 0 1 20.5 1.3 98.9 1.3 107.7 0 102.1-.3 100.7 5.5l-.6 2.5h-99.9c-106.7 0-102.7.2-101.9-4.7.3-1.7-3.4-1.8-94.5-2.1-68.7-.1-94.8-.5-94.5-1.3.2-.6 2.6-2.3 5.3-3.8 2.8-1.4 6.1-3.3 7.5-4.2 3.9-2.4 14-8.4 19-11.2 2.5-1.3 14.5-8.4 26.8-15.6 12.3-7.2 22.5-13.1 22.8-13.1.3 0 1.7-.8 3.2-1.9 3.7-2.5 20.1-12.1 20.8-12.1.2 0 1.7-.8 3.2-1.9 3.7-2.5 20.1-12.1 20.8-12.1.2 0 1-.5 1.7-1 2.8-2.4 59.3-34.9 60.2-34.6.6.1 1 2.9.9 6.2zm206.5-4c9 5.2 43.8 25.8 55.1 32.7 6.3 3.9 13.5 8.1 16 9.5 2.5 1.4 10.1 5.9 17 10.1 6.9 4.2 14.2 8.5 16.3 9.6 2 1.1 3.7 2.3 3.7 2.7 0 .5.5.8 1 .8.6 0 6.2 3.1 12.6 7 6.4 3.8 11.8 7 12 7 .5 0 26.8 15.9 28.1 17 .7.6 2.1 1.4 3 1.8 3.9 1.6 18.3 10.5 18.3 11.3 0 1.1-186.7 1.2-187.3.1-.8-1.3-1.9-112.2-1.1-112.2.4 0 2.8 1.2 5.3 2.6zM367.8 954.1l4.2 1.1v18.1l-4.2-.6c-2.4-.3-8.1-1.1-12.7-1.7-10.1-1.5-25.3-.9-27.5.9-2.2 1.9-2 3.8.8 5.6 1.6 1.1 6.6 1.8 16.3 2.4 12.2.8 14.6 1.2 19.4 3.6 6 3.1 7.2 4.3 9.9 10 3.6 7.3 2.1 17.5-3.3 23-6.7 6.8-13.4 8.5-33.2 8.4-8.2 0-18.6-.6-23-1.2l-8-1.2-.3-9.4-.3-9.4 4.8.7c29.9 4.3 41.9 4.1 44.4-.6 1-1.8.8-2.4-1.1-4-1.7-1.4-4-1.8-9.9-1.8-26 0-38.1-7.3-38.1-23 0-11.2 5.7-18.1 18-21.6 5.5-1.7 37.3-1.1 43.8.7zm308.2 1.4c7.1 3.9 10.1 9 10.8 18.5.7 10.3-1.2 16.4-6.6 21.7l-4.5 4.4 2.2 2.9c1.1 1.6 2.1 3.2 2.1 3.5 0 .7 5.2 8.7 6.8 10.4.7.7 1.2 2.5 1 4l-.3 2.6h-19l-6.2-9.3c-3.4-5.2-6.3-9.7-6.5-10.2-.2-.4-4.9-1-10.5-1.2l-10.2-.5-.3 10.6-.3 10.6-9.7.3-9.8.3v-34.3c0-18.9.4-34.8.8-35.5 1-1.5 10.2-2 35.2-1.9l19.5.1 5.5 3zm286.7-1.9c6.7 2.2 10.7 5.6 13.4 11.1 2 4 2.4 6.3 2.4 14.3-.1 14.3-4 21.2-14.2 25-4.6 1.7-7.8 2-21.3 2h-15.9l-.3 8.7-.3 8.8h-19v-70l8-.6c4.4-.3 15.7-.6 25.2-.7 13.5-.2 18.3.1 22 1.4zm-542.1.2c1 .7 13 17.8 19.9 28.4 1.6 2.6 3.5 4.7 4 4.7.6 0 5.7-7 11.5-15.6s11.1-16.2 11.9-17c1-1 3.7-1.3 10.5-1.1l9.1.3v70h-19l-.3-19.3-.2-19.3-2.4 2.8c-1.2 1.5-5.3 7.2-9.1 12.5l-6.8 9.8h-4.8c-4.7 0-5-.2-9-5.3-2.3-2.8-6.2-8.2-8.7-12-2.5-3.7-4.9-6.7-5.3-6.7-.5 0-1 8.4-1.1 18.7l-.3 18.8h-19l-.3-34c-.1-18.7 0-34.6.3-35.2.5-1.4 17.1-1.9 19.1-.5zm140.1 0c1.3.8 5.8 10.1 24.7 50.7 2.6 5.5 5.2 10.9 5.7 12.1.6 1.2.9 3.2.7 4.5-.3 2.3-.7 2.4-8.9 2.7l-8.6.3-3.1-7.1-3.2-7h-33l-3.1 7-3.2 7H511v-3c0-1.6 2.5-8.3 5.6-14.7 3.1-6.5 7.2-15.2 9.1-19.3 2-4.1 6-12.6 8.9-18.8 3-6.3 5.4-11.8 5.4-12.2 0-1.9 3.9-2.9 11.5-3 4.4 0 8.5.4 9.2.8zm222.1 8.4.3 8.7-13.3.3-13.3.3-.5 26-.5 26h-19l-.3-26.3-.2-26.2h-27v-8.3c0-4.6.3-8.7.7-9 .4-.4 16.9-.6 36.7-.5l36.1.3.3 8.7zm41.7-8.2c.4.6.7 10.9.8 22.8.2 24.2.5 25.5 7 28.8 3.9 2.1 15.5 2.4 20.9.5 7.3-2.5 7.7-3.9 8-29.7l.3-22.9h19V979c0 23.9-.1 25.8-2.1 30-6 12.7-15.5 16.5-38.8 15.8-10.8-.3-14-.8-18.1-2.7-6.4-2.8-13-9.9-14.3-15.4-1.2-4.7-1.9-50.8-.8-52.6.9-1.4 17.2-1.5 18.1-.1z" />
                <path
                  d="M637.3 970.7c-2.1.4-2.3 1-2.3 6.7v6.3l7.9.7c9.2.8 18.9 0 21.4-1.9 2.5-1.8 3.2-7.5 1.4-10-1.4-1.8-2.8-2-13.9-2.2-6.8-.1-13.3.1-14.5.4zM927.7 970.7c-.4.3-.7 4.1-.7 8.3v7.7l4.6.7c7.2.9 18.8.7 22.2-.5 3.7-1.3 5.7-5.5 4.8-10.4-1-5.4-4.2-6.5-18.4-6.5-6.5 0-12.2.3-12.5.7zM547.5 981.7c-6 13-6.3 12.3 4.4 12.3 8.2 0 9-.2 8.3-1.8-6.8-15.2-8.3-18.2-8.7-18.2-.2 0-2 3.5-4 7.7z" />
              </g>
            </svg>
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