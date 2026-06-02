__d(
  "WAWebCustomerManagerImportSaveAction",
  [
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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 10;
    async function c(e) {
      var t, n, a, i, l, s, u, c, d, m;
      if (e.lid == null)
        throw r("err")("Imported contact missing lid; cannot resolve chatJid");
      var p = o("WAWebWidFactory").createUserWidOrThrow(e.lid),
        _ = o("WAWebWidToJid").widToChatJid(p),
        f = e.phone.replace(/\D/g, "");
      (await o("WAWebSaveContactAction").saveContactAction({
        firstName:
          (t = (n = e.firstName) == null ? void 0 : n.trim()) != null ? t : "",
        lastName:
          (a = (i = e.lastName) == null ? void 0 : i.trim()) != null ? a : "",
        isExistingContact: !1,
        phoneNumber: f,
        prevPhoneNumber: null,
        syncToAddressbook: !1,
      }),
        await o("WAWebFindChatAction").findOrCreateLatestChat(
          p,
          "createContact",
        ));
      var g =
          (l = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
            e.rawRow,
            ["Email", o("WAWebCustomerManagerImportTemplateUtils").FBT_EMAIL],
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
          [
            "Source",
            o("WAWebCustomerManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE,
            "Acquisition source",
          ],
        ),
        b =
          C != null &&
          (u = o("WAWebAcquisitionSourceNames").getAcquisitionSourceIdFromName(
            C,
          )) != null
            ? u
            : void 0;
      await o("WAWebCustomerDataFieldSaver").upsertAsCustomer(_, y, {
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
        (await o("WAWebNoteAction").addOrEditNoteAction(
          {
            actionType: "add",
            noteType: "unstructured",
            chatJid: _,
            content: v.trim(),
          },
          !0,
        ));
    }
    function d(t, n, a) {
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
    async function m(e, t, n) {
      if (t >= e.length) return n;
      var r = e.slice(t, t + u),
        o = await Promise.allSettled(
          r.map(function (e) {
            return c(e);
          }),
        );
      return m(e, t + u, d(r, o, n));
    }
    async function p(e) {
      var t = await m(e, 0, { failureCount: 0, successCount: 0 });
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
    }
    l.saveImportedContacts = p;
  },
  98,
);
