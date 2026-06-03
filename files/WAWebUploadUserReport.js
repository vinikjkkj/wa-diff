__d(
  "WAWebUploadUserReport",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebCrashlogConstants",
    "WAWebLoggerDebugInfo",
    "WAWebXHR",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.description,
            a = t.email,
            i = t.entityId,
            l = t.phoneNumber,
            m = t.screenshots,
            p = t.subject,
            _ = t.supportTag;
          try {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UploadUserReport:uploadUserReport uploading",
                ])),
            ),
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "UploadUserReport:uploadUserReport description: ",
                      "",
                    ])),
                  n,
                )
                .verbose());
            var f = yield o("WAWebCrashlog").upload({
                reason: o("WAWebCrashlog").USER_REPORT,
                immediate: !1,
                isHighPri: !0,
                logType: o("WAWebCrashlog").LogType.SUPPORT,
              }),
              g = new FormData();
            (l != null && g.append("user", String(l)),
              g.append("email", a),
              f && g.append("crashlog", f),
              g.append("desc", n),
              m.map(function (e, t) {
                g.append("screenshot-" + t, e);
              }));
            var h = yield o("WAWebLoggerDebugInfo").getDebugInfo({
                supportTag: _,
                entityId: i,
              }),
              y = babelHelpers.extends({}, h, { subject: p });
            (g.append("info", JSON.stringify(y)),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "UploadUserReport:uploadUserReport submitting",
                  ])),
              ),
              yield r("WAWebXHR").post(
                o("WAWebCrashlogConstants").TICKET_URL,
                g,
              ),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "UploadUserReport:uploadUserReport succeeded",
                  ])),
              ));
          } catch (e) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "UploadUserReport:uploadUserReport failed ",
                  "",
                ])),
              String(e),
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.uploadUserReport = m;
  },
  98,
);
