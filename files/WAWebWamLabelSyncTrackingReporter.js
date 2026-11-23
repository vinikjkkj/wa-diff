__d(
  "WAWebWamLabelSyncTrackingReporter",
  [
    "WALogger",
    "WAWebMdLabelSyncTrackingWamEvent",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumLabelSyncDeviceRoleType",
    "WAWebWamEnumLabelSyncDirectionType",
    "WAWebWamEnumLabelSyncResultType",
    "WAWebWamEnumLabelSyncTypeEnum",
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
      return o("WAWebMobilePlatforms").isSMB();
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
    async function h(e) {
      var t = await _(),
        n = new TextEncoder(),
        r = await crypto.subtle.sign("HMAC", t, n.encode(e));
      return Array.from(new Uint8Array(r))
        .map(function (e) {
          return e.toString(16).padStart(2, "0");
        })
        .join("");
    }
    async function y(e) {
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
        return await h(a);
      } catch (e) {
        return "hash_generation_failed";
      }
    }
    async function C(e, t) {
      return y("label_jid", e, t);
    }
    async function b(e) {
      return y("label_edit", e);
    }
    function v(e, t) {
      var n;
      if (f()) {
        S(e, t.chatJid);
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
    function S(e, t) {
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
    function R(e) {
      var t = m.get(e);
      return t == null
        ? []
        : (m.delete(e),
          (p = p.filter(function (t) {
            return t.labelId !== e;
          })),
          t);
    }
    function L() {
      (m.clear(), (p = []), (d = null));
    }
    async function E(e) {
      return y("label_reorder", e);
    }
    function k(e, t, n, r, a, i, l, s) {
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
      (l.generateLabelJidHash = C),
      (l.generateLabelEditHash = b),
      (l.recordDeferredLabelAssociation = v),
      (l.removeDeferredLabelAssociation = S),
      (l.takeDeferredLabelAssociations = R),
      (l.resetLabelSyncTrackingState = L),
      (l.generateLabelReorderHash = E),
      (l.logLabelSyncEvent = k),
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
