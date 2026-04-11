__d(
  "WAWebWamLabelSyncTrackingReporter",
  [
    "WAWebABProps",
    "WAWebMdLabelSyncTrackingWamEvent",
    "WAWebMobilePlatforms",
    "WAWebWamEnumLabelSyncDeviceRoleType",
    "WAWebWamEnumLabelSyncDirectionType",
    "WAWebWamEnumLabelSyncResultType",
    "WAWebWamEnumLabelSyncTypeEnum",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "whatsapp_label_sync_tracking_v1",
      s = null;
    function u() {
      if (s == null) {
        var t = new TextEncoder();
        s = crypto.subtle.importKey(
          "raw",
          t.encode(e),
          { name: "HMAC", hash: "SHA-256" },
          !1,
          ["sign"],
        );
      }
      return s;
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_label_sync_critical_event_logging",
        )
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u(),
            n = new TextEncoder(),
            r = yield crypto.subtle.sign("HMAC", t, n.encode(e));
          return Array.from(new Uint8Array(r))
            .map(function (e) {
              return e.toString(16).padStart(2, "0");
            })
            .join("");
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return yield d(a);
          } catch (e) {
            return "hash_generation_failed";
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return p("label_jid", e, t);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return p("label_edit", e);
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
          return p("label_reorder", e);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, a, i, l) {
      if (c()) {
        var s = {
          labelSyncHash: e,
          labelSyncType: t,
          labelSyncDirection: n,
          labelSyncResult: r,
          labelSyncIsLabeled: a,
          labelSyncTimestamp: i,
          labelSyncDeviceRole: o("WAWebWamEnumLabelSyncDeviceRoleType")
            .LABEL_SYNC_DEVICE_ROLE_TYPE.COMPANION,
        };
        l != null && (s.labelSyncHasPending = l);
        var u = new (o(
          "WAWebMdLabelSyncTrackingWamEvent",
        ).MdLabelSyncTrackingWamEvent)(s);
        u.commit();
      }
    }
    ((l.generateHash = p),
      (l.generateLabelJidHash = f),
      (l.generateLabelEditHash = h),
      (l.generateLabelReorderHash = C),
      (l.logLabelSyncEvent = v),
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
