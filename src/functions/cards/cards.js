export const card1 = (data) => {
  console.log(data);
  return `<div
dir="ltr"
style="
  color: rgb(32, 33, 36);
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
"
>
<table style="direction: ltr; border-collapse: collapse">
  <tbody>
    <tr>
      <td
        style="margin: 0px; font-size: 0px; height: 12px; line-height: 0"
      ></td>
    </tr>
    <tr>
      <td style="margin: 0px">
        <table
          cellpadding="0"
          cellspacing="0"
          style="
            border-collapse: collapse;
            font-family: Arial;
            line-height: 1.15;
            color: rgb(0, 0, 0);
          "
        >
          <tbody>
            <tr>
              <td
                style="
                  margin: 0px;
                  vertical-align: top;
                  padding: 0.01px 14px 0.01px 1px;
                  width: 65px;
                  text-align: center;
                "
              >
                <img
                  src="data:image/png;base64,${data["Profile Pic"].value}"
                  height="65"
                  width="65"
                  alt="photo"
                  style="
                    width: 65px;
                    vertical-align: middle;
                    border-radius: 0px;
                    height: 65px;
                  "
                />
              </td>
              <td
                valign="top"
                style="
                  margin: 0px;
                  padding: 0.01px 0.01px 0.01px 14px;
                  vertical-align: top;
                  border-left: 1px solid rgb(189, 189, 189);
                "
              >
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="border-collapse: collapse"
                >
                  <tbody>
                    <tr>
                      <td
                        style="margin: 0px; line-height: 1.2; padding: 0.01px"
                      >
                        <span
                          style="
                            text-transform: initial;
                            font-weight: bold;
                            color: rgb(100, 100, 100);
                            letter-spacing: 0px;
                            line-height: 1.2;
                            text-wrap: nowrap;
                            font-size: 16px;
                          "
                          >${data["Full name"].value}</span
                        ><br /><span
                          style="
                            text-transform: initial;
                            font-weight: bold;
                            color: rgb(100, 100, 100);
                            line-height: 1.2;
                            text-wrap: nowrap;
                            font-size: 13px;
                          "
                          >${data["Title"].value},&nbsp;</span
                        ><span
                          style="
                            text-transform: initial;
                            font-weight: bold;
                            color: rgb(100, 100, 100);
                            line-height: 1.2;
                            text-wrap: nowrap;
                            font-size: 13px;
                          "
                          >${data["Company"].value}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="margin: 0px">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          style="border-collapse: collapse"
                        >
                          <tbody>
                            <tr>
                              <td
                                nowrap=""
                                width="251"
                                style="
                                  margin: 0px;
                                  padding-top: 14px;
                                  text-wrap: nowrap;
                                  width: 251px;
                                "
                              >
                                <p style="margin: 0.1px; line-height: 1">
                                  <span
                                    style="
                                      font-size: 11px;
                                      color: rgb(33, 33, 33);
                                    "
                                    ><a
                                      href="tel:+923101457770"
                                      rel="nofollow noreferrer"
                                      target="_blank"
                                      style="text-decoration: unset"
                                      ><span
                                        style="
                                          line-height: 1.2;
                                          color: rgb(33, 33, 33);
                                        "
                                        >${data["Mobile"].value}</span
                                      ></a
                                    >&nbsp;&nbsp;|&nbsp;&nbsp;<a
                                      href="https://${data["Website"].value}"
                                      rel="nofollow noreferrer"
                                      target="_blank"
                                      style="text-decoration: unset"
                                      ><span
                                        style="
                                          line-height: 1.2;
                                          color: rgb(33, 33, 33);
                                        "
                                        >${data["Website"].value}</span
                                      ></a
                                    ></span
                                  >
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          style="width: 345.8px"
        >
          <tbody>
            <tr>
              <td style="margin: 0px; line-height: 0"></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<br />
</div>
`;
};
