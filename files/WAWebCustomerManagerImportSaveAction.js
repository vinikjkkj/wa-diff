__d(
  "WAWebCustomerManagerImportSaveAction",
  [
    "Promise",
    "WALogger",
    "WAWebAcquisitionSourceNames",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebCustomerDataFieldSaver",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebFindChatAction",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebNoteAction",
    "WAWebSaveContactAction",
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
          var t, n, a, i, l, s, u, c, d, m;
          if (e.lid == null)
            throw r("err")(
              "Imported contact missing lid; cannot resolve chatJid",
            );
          var p = o("WAWebWidFactory").createUserWidOrThrow(e.lid),
            _ = o("WAWebWidToJid").widToChatJid(p),
            f = e.phone.replace(/\D/g, "");
          (yield o("WAWebSaveContactAction").saveContactAction({
            firstName:
              (t = (n = e.firstName) == null ? void 0 : n.trim()) != null
                ? t
                : "",
            lastName:
              (a = (i = e.lastName) == null ? void 0 : i.trim()) != null
                ? a
                : "",
            isExistingContact: !1,
            phoneNumber: f,
            prevPhoneNumber: null,
            syncToAddressbook: !1,
          }),
            yield o("WAWebFindChatAction").findOrCreateLatestChat(
              p,
              "createContact",
            ));
          var g =
              (l = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
                e.rawRow,
                [
                  "Email",
                  o("WAWebCustomerManagerImportTemplateUtils").FBT_EMAIL,
                ],
              )) != null
                ? l
                : "",
            h = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
              e.rawRow,
              ["Lead stage"],
            ),
            y =
              h != null &&
              (s = o("WAWebLeadStageNames").getLeadStageFromName(h)) != null
                ? s
                : o("WAWebLeadStage").LeadStage.INTAKE,
            C = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
              e.rawRow,
              ["Acquisition source"],
            ),
            b =
              C != null &&
              (u = o(
                "WAWebAcquisitionSourceNames",
              ).getAcquisitionSourceIdFromName(C)) != null
                ? u
                : void 0;
          yield o("WAWebCustomerDataFieldSaver").upsertAsCustomer(_, y, {
            email: g,
            altPhoneNumbers: "",
            address: "",
            acquisitionSource: b,
          });
          var v =
            (c = (d = e.rawRow) == null ? void 0 : d.Notes) != null
              ? c
              : (m = e.rawRow) == null
                ? void 0
                : m.notes;
          v != null &&
            v.trim() !== "" &&
            (yield o("WAWebNoteAction").addOrEditNoteAction(
              {
                actionType: "add",
                noteType: "unstructured",
                chatJid: _,
                content: v.trim(),
              },
              !0,
            ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, n, a) {
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (t >= e.length) return r;
          var o = e.slice(t, t + c),
            a = yield (u || (u = n("Promise"))).allSettled(
              o.map(function (e) {
                return d(e);
              }),
            );
          return _(e, t + c, p(o, a, r));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield _(e, 0, { failureCount: 0, successCount: 0 });
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
        h.apply(this, arguments)
      );
    }
    l.saveImportedContacts = g;
  },
  98,
);
