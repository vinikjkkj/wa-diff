__d(
  "WAWebMexFetchTextStatusListJob",
  [
    "WAComms",
    "WALogger",
    "WAWebCooldownBatcher",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebMexClient",
    "WAWebMexFetchTextStatusListJobQuery.graphql",
    "WAWebPrivacyGatingUtils",
    "WAWebTrustedContactsUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchTextStatusListJobQuery.graphql"));
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = new Set(),
              n = [];
            for (var a of e) {
              var i = a.wid.toJid();
              t.has(i) || (t.add(i), n.push(a));
            }
            var l = n.map(function (e) {
                return o("WAWebWidFactory").asUserWidOrThrow(e.wid);
              }),
              u = n.map(function (e) {
                var t;
                return {
                  jid: e.wid.toJid(),
                  last_update_time:
                    (t = e.lastUpdateTime) == null ? void 0 : t.toString(),
                };
              });
            if (
              o(
                "WAWebPrivacyGatingUtils",
              ).isProfileScrappingProtectionInMexFetchEnabled()
            )
              for (
                var d = yield o(
                    "WAWebGroupsPrivacyTokenUtils",
                  ).getPermissionTokenMapForChatIds(l),
                  m = 0;
                m < n.length;
                m++
              ) {
                var p,
                  _ = (p = d.get(l[m])) == null ? void 0 : p.anyElementValue;
                _ != null &&
                  (u[m].privacy_token = {
                    tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(
                      _.buffer,
                    ),
                  });
              }
            var f = { input: u };
            yield o("WAComms").waitForConnection();
            var g = yield o("WAWebMexClient").fetchQuery(c, f),
              h = g.xwa2_text_status_list;
            if (h == null) throw r("err")("textStatusListResponse is null");
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][TEXT-STATUS] fetched text status for ",
                    " contacts",
                  ])),
                h.length,
              )
              .tags("GQL", "MEX");
            var y = new Map();
            for (var b of h) b != null && y.set(b.jid, b);
            return e.map(function (e) {
              var t = e.wid.toJid(),
                n = y.get(t);
              if (n == null)
                return {
                  success: !1,
                  error: r("err")("No response for jid in batch"),
                };
              var o = C(n);
              return {
                success: !0,
                result: {
                  id: o.id,
                  text: o.textStatusString,
                  emoji: o.textStatusEmoji,
                  lastUpdateTime: o.textStatusLastUpdateTime,
                  ephemeralDurationSeconds: o.textStatusEphemeralDuration,
                },
              };
            });
          } catch (t) {
            var v = r("getErrorSafe")(t);
            return e.map(function () {
              return { success: !1, error: v };
            });
          }
        })),
        m.apply(this, arguments)
      );
    }
    var p = 250,
      _ = 5e3,
      f = 5e3,
      g = o("WAWebCooldownBatcher").createCooldownBatcher(
        { windowMs: p, maxWindowMs: _, cooldownMs: f },
        d,
      );
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!r("WAWebWid").isWid(e) || !e.isUser())
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[MEX][TEXT-STATUS] expected user wid, got: ",
                      "",
                    ])),
                  e.toLogString(),
                )
                .sendLogs("mex-text-status-list-invalid-wid"),
              r("err")(
                "[MEX][TEXT-STATUS] this method should only take user wid, instead it received: " +
                  e.toLogString(),
              )
            );
          var n = yield g({ wid: e, lastUpdateTime: t });
          if (!n.success) throw n.error;
          return n.result;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t;
      return {
        id: o("WAWebWidFactory").createWid(e.jid),
        textStatusString: e.text,
        textStatusEmoji: (t = e.emoji) == null ? void 0 : t.content,
        textStatusEphemeralDuration: e.ephemeral_duration_sec,
        textStatusLastUpdateTime: Number(e.last_update_time),
      };
    }
    ((l.mexGetTextStatusList = h), (l.parseTextStatusServerResponse = C));
  },
  98,
);
