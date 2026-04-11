__d(
  "WAWebReportToAdminJob",
  [
    "Promise",
    "WALogger",
    "WASmaxGroupsGetReportedMessagesRPC",
    "WASmaxGroupsReportMessagesRPC",
    "WAStanzaUtils",
    "WAWebBackendErrors",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = {
              iqTo: o("WAWebWidToJid").widToGroupJid(r),
              reportMessageId: o("WAStanzaUtils").toStanzaId(t.id.id),
            },
            i = yield o("WASmaxGroupsReportMessagesRPC").sendReportMessagesRPC(
              a,
            );
          e: {
            var l = i;
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.name === "ReportMessagesResponseSuccess"
            )
              return (d || (d = n("Promise"))).resolve();
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.name === "ReportMessagesResponseServerError" &&
              ((typeof l.value == "object" && l.value !== null) ||
                typeof l.value == "function") &&
              ((typeof l.value.errorServerErrors == "object" &&
                l.value.errorServerErrors !== null) ||
                typeof l.value.errorServerErrors == "function") &&
              ((typeof l.value.errorServerErrors.value == "object" &&
                l.value.errorServerErrors.value !== null) ||
                typeof l.value.errorServerErrors.value == "function") &&
              "code" in l.value.errorServerErrors.value &&
              "text" in l.value.errorServerErrors.value
            ) {
              var u = l.value.errorServerErrors.value.code,
                c = l.value.errorServerErrors.value.text;
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while sending a message for admin review",
                    ])),
                ),
                (d || (d = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(u),
                    c,
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.name === "ReportMessagesResponseClientError" &&
              ((typeof l.value == "object" && l.value !== null) ||
                typeof l.value == "function") &&
              ((typeof l.value.errorReportMessagesClientErrors == "object" &&
                l.value.errorReportMessagesClientErrors !== null) ||
                typeof l.value.errorReportMessagesClientErrors == "function") &&
              ((typeof l.value.errorReportMessagesClientErrors.value ==
                "object" &&
                l.value.errorReportMessagesClientErrors.value !== null) ||
                typeof l.value.errorReportMessagesClientErrors.value ==
                  "function") &&
              "code" in l.value.errorReportMessagesClientErrors.value &&
              "text" in l.value.errorReportMessagesClientErrors.value
            ) {
              var m = l.value.errorReportMessagesClientErrors.value.code,
                p = l.value.errorReportMessagesClientErrors.value.text;
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while sending a message for admin review",
                    ])),
                ),
                (d || (d = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(m),
                    p,
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                l,
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { iqTo: o("WAWebWidToJid").widToGroupJid(e) },
            r = yield o(
              "WASmaxGroupsGetReportedMessagesRPC",
            ).sendGetReportedMessagesRPC(t);
          switch (r.name) {
            case "GetReportedMessagesResponseSuccess": {
              var a = r.value,
                i = new Map(),
                l = [];
              return (
                a.reportsReport.forEach(function (e) {
                  e.reporter.map(function (e) {
                    var t,
                      n = o("WAWebJidToWid").userJidToUserWid(e.jid),
                      r =
                        (t = e.identityMixin) == null
                          ? void 0
                          : t.identityTypes.value.phoneNumber;
                    n.isLid() &&
                      r != null &&
                      l.push({
                        lid: n,
                        pn: o("WAWebJidToWid").userJidToUserWid(r),
                      });
                  });
                }),
                l.length > 0 &&
                  (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: l,
                    flushImmediately: !0,
                    learningSource: "other",
                  })),
                a.reportsReport.forEach(function (e, t) {
                  i.set(e.messageId, {
                    reporters: e.reporter.map(function (e) {
                      return o("WAWebJidToWid").userJidToUserWid(e.jid);
                    }),
                    order: t,
                  });
                }),
                (d || (d = n("Promise"))).resolve({
                  reports: a,
                  msgToReporterAndOrderMap: i,
                })
              );
            }
            case "GetReportedMessagesResponseClientError": {
              var s = r.value.errorGetReportedMessagesClientErrors.value,
                m = s.code,
                p = s.text;
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while getting reported message to admin for group",
                    ])),
                ),
                (d || (d = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(m),
                    p,
                  ),
                )
              );
            }
            case "GetReportedMessagesResponseServerError": {
              var _ = r.value.errorServerErrors.value,
                f = _.code,
                g = _.text;
              return (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while getting reported message to admin for group",
                    ])),
                ),
                (d || (d = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(f),
                    g,
                  ),
                )
              );
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.sendForAdminReview = m), (l.getReportedMsgs = _));
  },
  98,
);
