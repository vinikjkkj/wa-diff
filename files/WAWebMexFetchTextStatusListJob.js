__d(
  "WAWebMexFetchTextStatusListJob",
  [
    "WABatcher",
    "WAComms",
    "WALogger",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebMexClient",
    "WAWebMexFetchTextStatusListJobQuery.graphql",
    "WAWebPrivacyGatingUtils",
    "WAWebTrustedContactsUtils",
    "WAWebWid",
    "WAWebWidFactory",
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
    async function d(e) {
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
            var d = await o(
                "WAWebGroupsPrivacyTokenUtils",
              ).getPermissionTokenMapForChatIds(l),
              m = 0;
            m < n.length;
            m++
          ) {
            var p,
              f = (p = d.get(l[m])) == null ? void 0 : p.anyElementValue;
            f != null &&
              (u[m].privacy_token = {
                tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(
                  f.buffer,
                ),
              });
          }
        var g = { input: u };
        await o("WAComms").waitForConnection();
        var h = await o("WAWebMexClient").fetchQuery(c, g),
          y = h.xwa2_text_status_list;
        if (y == null) throw r("err")("textStatusListResponse is null");
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][TEXT-STATUS] fetched text status for ",
                " contacts",
              ])),
            y.length,
          )
          .tags("GQL", "MEX");
        var C = new Map();
        for (var b of y) b != null && C.set(b.jid, b);
        return e.map(function (e) {
          var t = e.wid.toJid(),
            n = C.get(t);
          if (n == null)
            return {
              success: !1,
              error: r("err")("No response for jid in batch"),
            };
          var o = _(n);
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
    }
    var m = o("WABatcher").batch({ delayMs: 200 }, d);
    async function p(e, t) {
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
      var n = await m({ wid: e, lastUpdateTime: t });
      if (!n.success) throw n.error;
      return n.result;
    }
    function _(e) {
      var t;
      return {
        id: o("WAWebWidFactory").createWid(e.jid),
        textStatusString: e.text,
        textStatusEmoji: (t = e.emoji) == null ? void 0 : t.content,
        textStatusEphemeralDuration: e.ephemeral_duration_sec,
        textStatusLastUpdateTime: Number(e.last_update_time),
      };
    }
    ((l.mexGetTextStatusList = p), (l.parseTextStatusServerResponse = _));
  },
  98,
);
