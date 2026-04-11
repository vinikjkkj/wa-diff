__d(
  "useWAWebBroadcastCampaigns",
  [
    "WALogger",
    "WAWebBizBroadcastCampaignDataLayer",
    "WAWebBroadcastConsts",
    "WAWebCmd",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState;
    function f(e) {
      e.forEach(function (e) {
        var t,
          n = (t = e.attachmentData) == null ? void 0 : t.previewUrl;
        n != null && n.startsWith("blob:") && URL.revokeObjectURL(n);
      });
    }
    function g() {
      var t = _([]),
        a = t[0],
        i = t[1],
        l = _(!0),
        c = l[0],
        d = l[1],
        g = _(null),
        h = g[0],
        y = g[1],
        C = _(0),
        b = C[0],
        v = C[1],
        S = p(null),
        R = p(!0);
      (m(function () {
        var e = function () {
          v(function (e) {
            return e + 1;
          });
        };
        return (
          o("WAWebCmd").Cmd.on(
            o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
            e,
          ),
          function () {
            o("WAWebCmd").Cmd.off(
              o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
              e,
            );
          }
        );
      }, []),
        m(function () {
          return function () {
            S.current != null && f(S.current);
          };
        }, []),
        m(
          function () {
            var t = !0;
            function a() {
              return l.apply(this, arguments);
            }
            function l() {
              return (
                (l = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (R.current && d(!0),
                      y(null),
                      S.current != null && (f(S.current), (S.current = null)));
                    try {
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[useWAWebBroadcastCampaigns] Loading campaigns...",
                          ])),
                      );
                      var n = yield o(
                        "WAWebBizBroadcastCampaignDataLayer",
                      ).loadBroadcastCampaigns();
                      t
                        ? ((S.current = n),
                          i(n),
                          (R.current = !1),
                          o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[useWAWebBroadcastCampaigns] Loaded ",
                                " campaigns",
                              ])),
                            n.length,
                          ))
                        : f(n);
                    } catch (e) {
                      if (t) {
                        var a = e instanceof Error ? e : r("err")(String(e));
                        (y(a),
                          o("WALogger").LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[useWAWebBroadcastCampaigns] Error loading campaigns: ",
                                "",
                              ])),
                            a.message,
                          ));
                      }
                    } finally {
                      t && d(!1);
                    }
                  },
                )),
                l.apply(this, arguments)
              );
            }
            return (
              a(),
              function () {
                t = !1;
              }
            );
          },
          [b],
        ));
      var L = function () {
        v(function (e) {
          return e + 1;
        });
      };
      return { campaigns: a, error: h, loading: c, refresh: L };
    }
    l.default = g;
  },
  98,
);
