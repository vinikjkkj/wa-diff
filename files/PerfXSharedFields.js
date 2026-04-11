__d(
  "PerfXSharedFields",
  ["CurrentLocale", "Locale", "SiteData", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e = typeof window != "undefined" ? window : self,
      s = {
        addCommonValues: function (n) {
          var t = e == null ? void 0 : e.navigator;
          try {
            (t &&
              typeof t.hardwareConcurrency == "number" &&
              (n.num_cores = Math.floor(t.hardwareConcurrency)),
              t && t.deviceMemory && (n.ram_gb = t.deviceMemory),
              t &&
                t.connection &&
                (typeof t.connection.downlink == "number" &&
                  (n.downlink_megabits = t.connection.downlink),
                typeof t.connection.effectiveType == "string" &&
                  (n.effective_connection_type = t.connection.effectiveType),
                typeof t.connection.rtt == "number" &&
                  (n.rtt_ms = t.connection.rtt)));
          } catch (e) {
            if (r("getErrorSafe")(e).message !== "can't access dead object")
              throw r("getErrorSafe")(e);
          }
          return (
            (n.client_push_phase = r("SiteData").push_phase),
            (n.client_revision = r("SiteData").client_revision),
            r("SiteData").server_revision != null &&
              (n.server_revision = r("SiteData").server_revision),
            (n.locale = r("CurrentLocale").get()),
            (n.isRTL = Number(o("Locale").isRTL())),
            n
          );
        },
        getCommonData: function () {
          var e = {};
          return (s.addCommonValues(e), e);
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
