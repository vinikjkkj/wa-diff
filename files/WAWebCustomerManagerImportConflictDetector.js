__d(
  "WAWebCustomerManagerImportConflictDetector",
  [
    "fbt",
    "WAJids",
    "WAWebContactImportFileProcessor",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerManagerImportEmailWarnings",
    "WAWebCustomerManagerImportRecordInput",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebGetNotesByChatJidsJob",
    "WAWebJidToWid",
    "WAWebLeadStageNames",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(this, "Saved customer data owner is unverified") || this),
            (n.name = "CustomerManagerImportPhoneDataOwnershipError"),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = s._(/*BTDS*/ "Name").toString();
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i;
          if (!a.complete) throw r("err")("Saved customer lookup incomplete");
          var l = a.legacy,
            s = a.localLeadStage,
            c = a.profile,
            d = a.savedNames;
          if (!s.isResolved) throw new e("unresolved-lead-stage-owner");
          var f = o(
              "WAWebCustomerManagerImportRecordInput",
            ).getImportedCustomerName(t),
            g =
              (i = o(
                "WAWebCustomerManagerImportTemplateUtils",
              ).readCustomerManagerImportColumn(t, "note")) == null
                ? void 0
                : i.trim(),
            h = o("WAWebJidToWid").lidUserJidToUserLid(n),
            y = m(t),
            C = p(t, c, l, s.stage),
            b = [h].concat(y).some(function (e) {
              return [e.toJid(), e.toString()].some(function (e) {
                var t,
                  n =
                    (t = d.get(e)) == null
                      ? void 0
                      : t.trim().replace(/\s+/g, " ");
                return _(f, n);
              });
            })
              ? [u].concat(C)
              : C;
          if (g == null || g === "")
            return { conflictingFields: b, hasMissingNote: !1 };
          var v = yield o("WAWebGetNotesByChatJidsJob").getNotesByChatJidsJob({
            chatJids: [o("WAWebWidToJid").widToChatJid(h)],
          });
          if (
            v.some(function (e) {
              return _(g, e.content.trim());
            })
          )
            return {
              conflictingFields: [].concat(b, [
                o("WAWebCustomerManagerImportTemplateUtils").FBT_NOTES,
              ]),
              hasMissingNote: !1,
            };
          var S = yield o("WAWebGetNotesByChatJidsJob").getNotesByChatJidsJob({
            chatJids: y.map(o("WAWebWidToJid").widToChatJid),
          });
          if (
            S.some(function (e) {
              return e.content.trim() !== "";
            })
          )
            throw new e("unowned-phone-note");
          return {
            conflictingFields: b,
            hasMissingNote: v.length === 0 && S.length === 0,
          };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = new Map(),
        n = o("WAWebContactImportFileProcessor").normalizePhoneNumber(e.phone);
      if (n !== "") {
        var r = o("WAWebWidFactory").createUserWidOrThrow(
          o("WAJids").toPhoneUserJid(n),
        );
        t.set(r.toJid(), r);
      }
      var a = e.verifiedPhoneJid;
      if (a != null) {
        var i = o("WAWebWidFactory").createUserWidOrThrow(a);
        t.set(i.toJid(), i);
      }
      return Array.from(t.values());
    }
    function p(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        f =
          (a =
            (i = t == null ? void 0 : t.address) != null
              ? i
              : n == null
                ? void 0
                : n.address) == null
            ? void 0
            : a.trim(),
        h =
          (l =
            (s = o(
              "WAWebCustomerManagerImportTemplateUtils",
            ).readCustomerManagerImportColumn(e, "email")) == null
              ? void 0
              : s.trim()) != null
            ? l
            : "",
        y = o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "leadStage"),
        C = y != null ? o("WAWebLeadStageNames").getLeadStageFromName(y) : null,
        b = r,
        v = o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "acquisitionSource"),
        S = [
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_ADDRESS,
            imported:
              (u = o(
                "WAWebCustomerManagerImportTemplateUtils",
              ).readCustomerManagerImportColumn(e, "address")) == null
                ? void 0
                : u.trim(),
            stored: f,
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_EMAIL,
            imported: o(
              "WAWebCustomerManagerImportEmailWarnings",
            ).isValidImportEmail(h)
              ? h
              : "",
            stored: t == null || (c = t.email) == null ? void 0 : c.trim(),
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_LEAD_STAGE,
            imported: C,
            stored: b,
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils")
              .FBT_ACQUISITION_SOURCE,
            imported:
              v != null
                ? o(
                    "WAWebCustomerProfileAcquisitionSourceNames",
                  ).getProfileAcquisitionSourceIdFromLabel(v)
                : null,
            stored: t == null ? void 0 : t.acquisitionSource,
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_BIRTHDAY,
            imported: g(
              o(
                "WAWebCustomerManagerImportDateParsingUtils",
              ).readValidCustomerManagerImportDate(
                o(
                  "WAWebCustomerManagerImportTemplateUtils",
                ).readCustomerManagerImportColumn(e, "birthday"),
                "birthday",
              ),
            ),
            stored: g(
              (d = t == null ? void 0 : t.birthday) != null
                ? d
                : n == null
                  ? void 0
                  : n.birthday,
            ),
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_LAST_ORDER,
            imported:
              (m = o(
                "WAWebCustomerManagerImportTemplateUtils",
              ).readCustomerManagerImportColumn(e, "lastOrder")) == null
                ? void 0
                : m.trim(),
            stored:
              t == null || (p = t.lastOrderDescription) == null
                ? void 0
                : p.trim(),
          },
        ];
      return S.filter(function (e) {
        var t = e.imported,
          n = e.stored;
        return _(t, n);
      }).map(function (e) {
        var t = e.label;
        return t;
      });
    }
    function _(e, t) {
      return e == null || e === "" || t == null || t === "" ? !1 : e !== t;
    }
    function f(e) {
      if (e == null) return null;
      var t = new Date(e * 1e3);
      return Number.isNaN(t.getTime()) ? null : t.toISOString().slice(0, 10);
    }
    function g(e) {
      var t;
      return (t = f(e)) == null ? void 0 : t.slice(5);
    }
    ((l.CustomerManagerImportPhoneDataOwnershipError = e),
      (l.readImportedCustomerMergeState = c),
      (l.getConflictingCustomerFieldsByValue = p));
  },
  226,
);
