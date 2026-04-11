__d(
  "useWAWebCallLinkWaitingRoomState",
  [
    "WALogger",
    "WASmaxVoipLinkQueryRPC",
    "WAWebApiParse",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = p.useEffect,
      f = p.useState;
    function g(t) {
      var r = f(t != null),
        a = r[0],
        i = r[1],
        l = f(null),
        m = l[0],
        p = l[1],
        g = f(null),
        h = g[0],
        y = g[1],
        C = f(0),
        b = C[0],
        v = C[1],
        S = function () {
          v(function (e) {
            return e + 1;
          });
        };
      return (
        _(
          function () {
            if (t == null) {
              (i(!1), p(null), y(null));
              return;
            }
            var r = o("WAWebApiParse").parseCallLink(t);
            if (r == null) {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "useWAWebCallLinkWaitingRoomState: Invalid call link format",
                  ])),
              ),
                i(!1),
                p(null),
                y(null));
              return;
            }
            var a = r.data,
              l = a.callType,
              m = a.token,
              _ = l === "video";
            i(!0);
            function f() {
              return g.apply(this, arguments);
            }
            function g() {
              return (
                (g = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    try {
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "useWAWebCallLinkWaitingRoomState: Querying call link state for token=",
                            ", isVideoCall=",
                            "",
                          ])),
                        m,
                        _,
                      );
                      var e = yield o(
                        "WASmaxVoipLinkQueryRPC",
                      ).sendLinkQueryRPC({
                        linkQueryToken: m,
                        linkQueryMedia: _ ? "video" : "audio",
                        linkQueryAction: "link_edit",
                      });
                      if (e.name === "LinkQueryResponseLinkQueryAck") {
                        var t = e.value.linkQueryWaitingRoom,
                          n = (t == null ? void 0 : t.enabled) === "1";
                        (o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "useWAWebCallLinkWaitingRoomState: LinkQuery succeeded, waitingRoomEnabled=",
                              "",
                            ])),
                          n,
                        ),
                          i(!1),
                          p(n),
                          y(null));
                      } else
                        (o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "useWAWebCallLinkWaitingRoomState: LinkQuery nacked",
                            ])),
                        ),
                          i(!1),
                          p(null),
                          y(null));
                    } catch (e) {
                      (e instanceof Error &&
                        o("WALogger")
                          .ERROR(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "useWAWebCallLinkWaitingRoomState: Failed to query call link",
                              ])),
                          )
                          .catching(e),
                        i(!1),
                        p(null),
                        y(e instanceof Error ? e : null));
                    }
                  },
                )),
                g.apply(this, arguments)
              );
            }
            f();
          },
          [t, b],
        ),
        { isLoading: a, isWaitingRoomEnabled: m, error: h, refetch: S }
      );
    }
    l.default = g;
  },
  98,
);
