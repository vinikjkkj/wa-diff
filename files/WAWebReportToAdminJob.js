__d(
  "WAWebReportToAdminJob",
  [
    "WALogger",
    "WASmaxGroupsGetReportedMessagesRPC",
    "WASmaxGroupsReportMessagesRPC",
    "WAStanzaUtils",
    "WAWebBackendErrors",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
      var r = {
          iqTo: o("WAWebWidToJid").widToGroupJid(n),
          reportMessageId: o("WAStanzaUtils").toStanzaId(t.id.id),
        },
        a = await o("WASmaxGroupsReportMessagesRPC").sendReportMessagesRPC(r);
      e: {
        var i = a;
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.name === "ReportMessagesResponseSuccess"
        )
          return Promise.resolve();
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.name === "ReportMessagesResponseServerError" &&
          ((typeof i.value == "object" && i.value !== null) ||
            typeof i.value == "function") &&
          ((typeof i.value.errorServerErrors == "object" &&
            i.value.errorServerErrors !== null) ||
            typeof i.value.errorServerErrors == "function") &&
          ((typeof i.value.errorServerErrors.value == "object" &&
            i.value.errorServerErrors.value !== null) ||
            typeof i.value.errorServerErrors.value == "function") &&
          "code" in i.value.errorServerErrors.value &&
          "text" in i.value.errorServerErrors.value
        ) {
          var l = i.value.errorServerErrors.value.code,
            u = i.value.errorServerErrors.value.text;
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while sending a message for admin review",
                ])),
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(l), u),
            )
          );
          break e;
        }
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.name === "ReportMessagesResponseClientError" &&
          ((typeof i.value == "object" && i.value !== null) ||
            typeof i.value == "function") &&
          ((typeof i.value.errorReportMessagesClientErrors == "object" &&
            i.value.errorReportMessagesClientErrors !== null) ||
            typeof i.value.errorReportMessagesClientErrors == "function") &&
          ((typeof i.value.errorReportMessagesClientErrors.value == "object" &&
            i.value.errorReportMessagesClientErrors.value !== null) ||
            typeof i.value.errorReportMessagesClientErrors.value ==
              "function") &&
          "code" in i.value.errorReportMessagesClientErrors.value &&
          "text" in i.value.errorReportMessagesClientErrors.value
        ) {
          var c = i.value.errorReportMessagesClientErrors.value.code,
            d = i.value.errorReportMessagesClientErrors.value.text;
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while sending a message for admin review",
                ])),
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(c), d),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            i,
        );
      }
    }
    async function m(e) {
      var t = { iqTo: o("WAWebWidToJid").widToGroupJid(e) },
        n = await o(
          "WASmaxGroupsGetReportedMessagesRPC",
        ).sendGetReportedMessagesRPC(t);
      switch (n.name) {
        case "GetReportedMessagesResponseSuccess": {
          var r = n.value,
            a = new Map(),
            i = [];
          return (
            r.reportsReport.forEach(function (e) {
              e.reporter.map(function (e) {
                var t,
                  n = o("WAWebJidToWid").userJidToUserWid(e.jid),
                  r =
                    (t = e.identityMixin) == null
                      ? void 0
                      : t.identityTypes.value.phoneNumber;
                n.isLid() &&
                  r != null &&
                  i.push({
                    lid: n,
                    pn: o("WAWebJidToWid").userJidToUserWid(r),
                  });
              });
            }),
            i.length > 0 &&
              (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: i,
                flushImmediately: !0,
                learningSource: "other",
              })),
            r.reportsReport.forEach(function (e, t) {
              a.set(e.messageId, {
                reporters: e.reporter.map(function (e) {
                  return o("WAWebJidToWid").userJidToUserWid(e.jid);
                }),
                order: t,
              });
            }),
            Promise.resolve({ reports: r, msgToReporterAndOrderMap: a })
          );
        }
        case "GetReportedMessagesResponseClientError": {
          var l = n.value.errorGetReportedMessagesClientErrors.value,
            s = l.code,
            d = l.text;
          return (
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while getting reported message to admin for group",
                ])),
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(s), d),
            )
          );
        }
        case "GetReportedMessagesResponseServerError": {
          var m = n.value.errorServerErrors.value,
            p = m.code,
            _ = m.text;
          return (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while getting reported message to admin for group",
                ])),
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(p), _),
            )
          );
        }
      }
    }
    ((l.sendForAdminReview = d), (l.getReportedMsgs = m));
  },
  98,
);
