__d(
  "PerfXSharedFields",
  ["CurrentLocale", "Locale", "SiteData", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e = typeof window != "undefined" ? window : self,
      s = {
        addCommonValues: function (n) {
          var t = e == null ? void 0 : e.navigator;
          try {
            t &&
              typeof t.hardwareConcurrency == "number" &&
              (n.num_cores = Math.floor(t.hardwareConcurrency));
            var a = t,
              i = a == null ? void 0 : a.deviceMemory;
            typeof i == "number" && i !== 0 && (n.ram_gb = i);
            var l = t,
              s = l == null ? void 0 : l.connection;
            s != null &&
              (typeof s.downlink == "number" &&
                (n.downlink_megabits = s.downlink),
              typeof s.effectiveType == "string" &&
                (n.effective_connection_type = s.effectiveType),
              typeof s.rtt == "number" && (n.rtt_ms = s.rtt));
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
