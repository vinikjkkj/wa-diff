__d(
  "WAWebContactManagerImportSaveAction",
  [
    "Promise",
    "WALogger",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactManagerCreateCustomerRecord",
    "WAWebContactManagerImportTemplateUtils",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebLeadStageNames",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          if (e.lid == null)
            throw r("err")(
              "Imported contact missing lid; cannot resolve chatJid",
            );
          var a = o("WAWebWidFactory").createUserWidOrThrow(e.lid),
            i = e.phone.replace(/\D/g, "");
          yield o(
            "WAWebContactManagerCreateCustomerRecord",
          ).createCustomerRecord({
            acquisitionSource: _(e),
            address:
              (t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
                e.rawRow,
                [
                  "Address",
                  o("WAWebContactManagerImportTemplateUtils").FBT_ADDRESS,
                ],
              )) != null
                ? t
                : "",
            chatJid: o("WAWebWidToJid").widToChatJid(a),
            email:
              (n = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
                e.rawRow,
                [
                  "Email",
                  o("WAWebContactManagerImportTemplateUtils").FBT_EMAIL,
                ],
              )) != null
                ? n
                : "",
            firstName: e.firstName,
            lastName: e.lastName,
            leadStage: p(e),
            note: o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
              e.rawRow,
              ["Notes", o("WAWebContactManagerImportTemplateUtils").FBT_NOTES],
            ),
            phoneNumber: i,
            profileWid: a,
            username: o(
              "WAWebContactImportTemplateParsingUtils",
            ).readRawRowColumn(e.rawRow, [
              "Username",
              o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME,
            ]),
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e.rawRow,
        [
          "Lead stage",
          o("WAWebContactManagerImportTemplateUtils").FBT_LEAD_STAGE,
        ],
      );
      return t != null
        ? o("WAWebLeadStageNames").getLeadStageFromName(t)
        : null;
    }
    function _(e) {
      var t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e.rawRow,
        [
          "Source",
          o("WAWebContactManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE,
          "Acquisition source",
        ],
      );
      return t != null
        ? o(
            "WAWebCustomerProfileAcquisitionSourceNames",
          ).getProfileAcquisitionSourceIdFromLabel(t)
        : null;
    }
    function f(t, n, a) {
      return n.reduce(function (n, a, i) {
        return a.status === "fulfilled"
          ? babelHelpers.extends({}, n, { successCount: n.successCount + 1 })
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] save failed for row ",
                    "",
                  ])),
                t[i].rowIndex,
              )
              .catching(r("getErrorSafe")(a.reason))
              .sendLogs("cm-import-save-row-failed"),
            babelHelpers.extends({}, n, { failureCount: n.failureCount + 1 }));
      }, a);
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (t >= e.length) return r;
          var o = e.slice(t, t + c),
            a = yield (u || (u = n("Promise"))).allSettled(
              o.map(function (e) {
                return d(e);
              }),
            );
          return g(e, t + c, f(o, a, r));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g(e, 0, { failureCount: 0, successCount: 0 });
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] save complete: ",
                    " ok, ",
                    " failed",
                  ])),
                t.successCount,
                t.failureCount,
              )
              .sendLogs("cm-import-save-complete"),
            t
          );
        })),
        C.apply(this, arguments)
      );
    }
    l.saveImportedContacts = y;
  },
  98,
);
