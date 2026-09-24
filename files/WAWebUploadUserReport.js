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
            r = t.email,
            a = t.entityId,
            i = t.phoneNumber,
            l = t.screenshots,
            m = t.subject,
            p = t.supportTag;
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
            var _ = yield o("WAWebCrashlog").upload({
                reason: o("WAWebCrashlog").USER_REPORT,
                immediate: !1,
                isHighPri: !0,
                logType: o("WAWebCrashlog").LogType.SUPPORT,
              }),
              f = new FormData();
            (i != null && f.append("user", String(i)),
              f.append("email", r),
              _ != null && _ !== "" && f.append("crashlog", _),
              f.append("desc", n),
              l.map(function (e, t) {
                f.append("screenshot-" + t, e);
              }));
            var g = yield o("WAWebLoggerDebugInfo").getDebugInfo({
                supportTag: p,
                entityId: a,
              }),
              h = babelHelpers.extends({}, g, { subject: m });
            (f.append("info", JSON.stringify(h)),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "UploadUserReport:uploadUserReport submitting",
                  ])),
              ),
              yield o("WAWebXHR").post(
                o("WAWebCrashlogConstants").TICKET_URL,
                f,
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
