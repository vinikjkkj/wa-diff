__d(
  "WAWebWamLabelSyncTrackingReporter",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebMdLabelSyncTrackingWamEvent",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumLabelSyncDeviceRoleType",
    "WAWebWamEnumLabelSyncDirectionType",
    "WAWebWamEnumLabelSyncResultType",
    "WAWebWamEnumLabelSyncTypeEnum",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "whatsapp_label_sync_tracking_v1",
      u = 1e3,
      c = null,
      d = null,
      m = new Map(),
      p = [];
    function _() {
      if (c == null) {
        var e = new TextEncoder();
        c = crypto.subtle.importKey(
          "raw",
          e.encode(s),
          { name: "HMAC", hash: "SHA-256" },
          !1,
          ["sign"],
        );
      }
      return c;
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_label_sync_critical_event_logging",
        )
      );
    }
    function g() {
      if (d != null) return d;
      try {
        return (
          (d = o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage()),
          d
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read hosted account preference for label sync tracking",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("label-sync-tracking-capi-hosted-read-error"),
          (d = !1),
          !1
        );
      }
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield _(),
            n = new TextEncoder(),
            r = yield crypto.subtle.sign("HMAC", t, n.encode(e));
          return Array.from(new Uint8Array(r))
            .map(function (e) {
              return e.toString(16).padStart(2, "0");
            })
            .join("");
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!f()) return "logging_disabled";
          try {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o = n
                .map(function (e) {
                  return ',"' + e + '"';
                })
                .join(""),
              a = '["' + e + '"' + o + "]";
            return yield h(a);
          } catch (e) {
            return "hash_generation_failed";
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return C("label_jid", e, t);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return C("label_edit", e);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      var n;
      if (f()) {
        k(e, t.chatJid);
        var r = (n = m.get(e)) != null ? n : [];
        if (
          (r.push(t),
          m.set(e, r),
          p.push({ association: t, labelId: e }),
          p.length > u)
        ) {
          var o = p.shift();
          if (o != null) {
            var a = m.get(o.labelId);
            if (a != null) {
              var i = a.indexOf(o.association);
              (i !== -1 && a.splice(i, 1),
                a.length === 0 && m.delete(o.labelId));
            }
          }
        }
      }
    }
    function k(e, t) {
      var n = m.get(e);
      if (n != null) {
        var r = n.filter(function (e) {
          return e.chatJid !== t;
        });
        r.length !== n.length &&
          (r.length === 0 ? m.delete(e) : m.set(e, r),
          (p = p.filter(function (n) {
            return n.labelId !== e || n.association.chatJid !== t;
          })));
      }
    }
    function I(e) {
      var t = m.get(e);
      return t == null
        ? []
        : (m.delete(e),
          (p = p.filter(function (t) {
            return t.labelId !== e;
          })),
          t);
    }
    function T() {
      (m.clear(), (p = []), (d = null));
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return C("label_reorder", e);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r, a, i, l, s) {
      if (f()) {
        var u = {
          labelSyncHash: e,
          labelSyncType: t,
          labelSyncDirection: n,
          labelSyncResult: r,
          labelSyncIsLabeled: a,
          labelSyncTimestamp: i,
          labelSyncDeviceRole: o("WAWebWamEnumLabelSyncDeviceRoleType")
            .LABEL_SYNC_DEVICE_ROLE_TYPE.COMPANION,
          labelSyncIsCapiHosted: g(),
        };
        (l != null && (u.labelSyncHasPending = l),
          s != null && (u.labelSyncPredefinedId = s));
        var c = new (o(
          "WAWebMdLabelSyncTrackingWamEvent",
        ).MdLabelSyncTrackingWamEvent)(u);
        c.commit();
      }
    }
    ((l.MAX_DEFERRED_ASSOCIATION_COUNT = u),
      (l.generateLabelJidHash = v),
      (l.generateLabelEditHash = R),
      (l.recordDeferredLabelAssociation = E),
      (l.removeDeferredLabelAssociation = k),
      (l.takeDeferredLabelAssociations = I),
      (l.resetLabelSyncTrackingState = T),
      (l.generateLabelReorderHash = D),
      (l.logLabelSyncEvent = $),
      (l.LABEL_SYNC_TYPE_ENUM = o(
        "WAWebWamEnumLabelSyncTypeEnum",
      ).LABEL_SYNC_TYPE_ENUM),
      (l.LABEL_SYNC_DIRECTION_TYPE = o(
        "WAWebWamEnumLabelSyncDirectionType",
      ).LABEL_SYNC_DIRECTION_TYPE),
      (l.LABEL_SYNC_RESULT_TYPE = o(
        "WAWebWamEnumLabelSyncResultType",
      ).LABEL_SYNC_RESULT_TYPE));
  },
  98,
);
