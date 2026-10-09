__d(
  "WAWebCustomerManagerImportConflictDetector",
  [
    "fbt",
    "WAJids",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerManagerImportEmailWarnings",
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
          var g = _(t),
            h =
              (i = o(
                "WAWebCustomerManagerImportTemplateUtils",
              ).readCustomerManagerImportColumn(t, "note")) == null
                ? void 0
                : i.trim(),
            y = o("WAWebJidToWid").lidUserJidToUserLid(n),
            C = m(t),
            b = p(t, c, l, s.stage),
            v = [y].concat(C).some(function (e) {
              return [e.toJid(), e.toString()].some(function (e) {
                var t,
                  n =
                    (t = d.get(e)) == null
                      ? void 0
                      : t.trim().replace(/\s+/g, " ");
                return n != null && n !== "" && n !== g;
              });
            })
              ? [u].concat(b)
              : b;
          if (h == null || h === "") return v;
          var S = yield o("WAWebGetNotesByChatJidsJob").getNotesByChatJidsJob({
            chatJids: [o("WAWebWidToJid").widToChatJid(y)],
          });
          if (
            S.some(function (e) {
              return f(h, e.content.trim());
            })
          )
            return [].concat(v, [
              o("WAWebCustomerManagerImportTemplateUtils").FBT_NOTES,
            ]);
          var R = yield o("WAWebGetNotesByChatJidsJob").getNotesByChatJidsJob({
            chatJids: C.map(o("WAWebWidToJid").widToChatJid),
          });
          if (
            R.some(function (e) {
              return e.content.trim() !== "";
            })
          )
            throw new e("unowned-phone-note");
          return v;
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      var n = new Map(),
        r = t.phone.replace(/\D/g, "");
      if (r !== "") {
        var a = o("WAWebWidFactory").createUserWidOrThrow(
          o("WAJids").toPhoneUserJid(r),
        );
        n.set(a.toJid(), a);
      }
      var i = t.verifiedPhoneJid;
      if (i != null) {
        var l = i.replace(/@c\.us$/, "@s.whatsapp.net");
        if (o("WAJids").interpretAndValidateJid(l).jidType !== "phoneUser")
          throw new e("malformed-verified-jid");
        var s = o("WAWebWidFactory").createUserWidOrThrow(l);
        n.set(s.toJid(), s);
      }
      return Array.from(n.values());
    }
    function p(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m =
          (a =
            (i = t == null ? void 0 : t.address) != null
              ? i
              : n == null
                ? void 0
                : n.address) == null
            ? void 0
            : a.trim(),
        p =
          (l =
            (s = o(
              "WAWebCustomerManagerImportTemplateUtils",
            ).readCustomerManagerImportColumn(e, "email")) == null
              ? void 0
              : s.trim()) != null
            ? l
            : "",
        _ = o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "leadStage"),
        y = _ != null ? o("WAWebLeadStageNames").getLeadStageFromName(_) : null,
        C = r,
        b = o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "acquisitionSource"),
        v = [
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_ADDRESS,
            imported:
              (u = o(
                "WAWebCustomerManagerImportTemplateUtils",
              ).readCustomerManagerImportColumn(e, "address")) == null
                ? void 0
                : u.trim(),
            stored: m,
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_EMAIL,
            imported: o(
              "WAWebCustomerManagerImportEmailWarnings",
            ).isValidImportEmail(p)
              ? p
              : "",
            stored: t == null || (c = t.email) == null ? void 0 : c.trim(),
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_LEAD_STAGE,
            imported: y,
            stored: C,
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils")
              .FBT_ACQUISITION_SOURCE,
            imported:
              b != null
                ? o(
                    "WAWebCustomerProfileAcquisitionSourceNames",
                  ).getProfileAcquisitionSourceIdFromLabel(b)
                : null,
            stored: t == null ? void 0 : t.acquisitionSource,
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_BIRTHDAY,
            imported: h(
              o(
                "WAWebCustomerManagerImportDateParsingUtils",
              ).readValidCustomerManagerImportDate(
                o(
                  "WAWebCustomerManagerImportTemplateUtils",
                ).readCustomerManagerImportColumn(e, "birthday"),
                "birthday",
              ),
            ),
            stored: h(
              (d = t == null ? void 0 : t.birthday) != null
                ? d
                : n == null
                  ? void 0
                  : n.birthday,
            ),
          },
          {
            label: o("WAWebCustomerManagerImportTemplateUtils").FBT_LAST_ORDER,
            imported: g(
              o(
                "WAWebCustomerManagerImportDateParsingUtils",
              ).readValidCustomerManagerImportDate(
                o(
                  "WAWebCustomerManagerImportTemplateUtils",
                ).readCustomerManagerImportColumn(e, "lastOrder"),
                "lastOrder",
              ),
            ),
            stored: g(t == null ? void 0 : t.lastOrder),
          },
        ];
      return v
        .filter(function (e) {
          var t = e.imported,
            n = e.stored;
          return f(t, n);
        })
        .map(function (e) {
          var t = e.label;
          return t;
        });
    }
    function _(e) {
      var t, n;
      return (
        ((t = e.firstName) != null ? t : "") +
        " " +
        ((n = e.lastName) != null ? n : "")
      )
        .trim()
        .replace(/\s+/g, " ");
    }
    function f(e, t) {
      return e == null || e === "" || t == null || t === "" ? !1 : e !== t;
    }
    function g(e) {
      if (e == null) return null;
      var t = new Date(e * 1e3);
      return Number.isNaN(t.getTime()) ? null : t.toISOString().slice(0, 10);
    }
    function h(e) {
      var t;
      return (t = g(e)) == null ? void 0 : t.slice(5);
    }
    ((l.CustomerManagerImportPhoneDataOwnershipError = e),
      (l.getConflictingCustomerFields = c));
  },
  226,
);
