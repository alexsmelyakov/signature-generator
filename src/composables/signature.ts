import { companyName, logoUrl, websiteAddress, websiteUrl } from '@/config'

import type { Profile } from '@/types'

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
          <td align='left' valign='top' style='text-align: left; padding: 4px 0'>
            <img src="${logoUrl}" width="64" alt="Smartup Technology">
          </td>
          <td align='left' valign='top' nowrap='nowrap' width='224'>
            <div style="margin-bottom: 8px;">
              ${
                model.name &&
                `
                <span style='font-weight: bold; color: rgb(33, 33, 33); display: inline;font-size: 12px;'>
                  ${model.name}
                </span>
              `
              }
              ${
                model.position &&
                `
                <br>
                <span style='color: rgb(33, 33, 33); display: inline;'>
                  ${model.position}
                </span>
              `
              }
              ${
                model.email &&
                `
                <br>
                <a href='mailto:${model.email}'
                  style='color: #1976d2; text-decoration: none; display: inline;'>
                  ${model.email}
                </a>
                `
              }
              ${
                model.phone &&
                `
                  <br />
                  <a href='tel://${model.phone}'
                    style='color: #1976d2; text-decoration: none; display: inline;'
                  >${model.phone}</a>
                `
              }
            </div>
            <div>
              <span style='font-family: Helvetica, Arial, sans-serif; font-size: 12px; line-height: 16px;'>
                <span
                  style='font-weight: bold; color: rgb(33, 33, 33); display: inline;'
                >
                  ${companyName}
                </span>
                <br>
                <a
                  style='color: #1976d2; text-decoration: none; display: inline;'
                  href='${websiteUrl}'
                >
                  ${websiteAddress}
                </a>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <span>&nbsp;</span>
  `
