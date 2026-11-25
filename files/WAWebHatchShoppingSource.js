__d(
  "WAWebHatchShoppingSource",
  [
    "WAWebBotUtils",
    "WAWebHatchJsonReaders",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmConnection",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t,
        n,
        a = o("WAWebMsgCollection").MsgCollection.get(e);
      if (
        a == null ||
        e.fromMe ||
        !o("WAWebBotUtils").isHatchBot(e.remote) ||
        o("WAWebMsgGetters").getIsForwarded(a) ||
        o("WAWebMsgGetters").getForwardedAiBotMessageInfo(a) != null
      )
        return null;
      var i = o("WAWebMsgGetters").getUnifiedResponse(
          o("WAWebMsgCasts").castToRichResponseMsg(a),
        ),
        l = i == null ? void 0 : i.passthrough_payload;
      if (
        l == null ||
        !("jarvis_envelope" in l) ||
        l.envelope_schema_version !== "1"
      )
        return null;
      var s;
      try {
        s = JSON.parse(l.jarvis_envelope);
      } catch (e) {
        return null;
      }
      var u = o("WAWebHatchJsonReaders").readObject(s, "stream_event_row"),
        c = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        d = r(
          "WAWebHatchLinkedStatusManager",
        ).getLastConfirmedLinkedStatusState();
      if (i == null || c == null || d === "unlinked") return null;
      var m = o("WAWebHatchJsonReaders").readField(u, "session_id");
      return {
        accountKey: c,
        vmKey:
          d === "linked"
            ? (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
              ? void 0
              : t.channelFbid
            : null,
        generation: o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        sessionId:
          m == null
            ? null
            : (n = o("WAWebHatchJsonReaders").readString(u, "session_id")) !=
                null
              ? n
              : "",
        source: i,
      };
    }
    function m(e) {
      return p(d(e));
    }
    function p(e) {
      var t = e == null ? void 0 : e.vmKey;
      return e != null && t != null && t !== ""
        ? babelHelpers.extends({}, e, { vmKey: t })
        : null;
    }
    function _(e, t) {
      return (
        e.source === t.source &&
        e.accountKey === t.accountKey &&
        e.generation === t.generation &&
        e.sessionId === t.sessionId
      );
    }
    function f(e, t) {
      var n = m(e);
      return n != null && _(n, t) && n.vmKey === t.vmKey;
    }
    function g(e, t, n) {
      var o = p(t),
        a = null,
        i = !1,
        l = function () {
          if (!i) {
            var r = d(e),
              l = a != null ? a : o;
            r == null || !_(r, t) || (l != null && r.vmKey !== l.vmKey)
              ? ((i = !0), n(null))
              : a == null && ((a = p(r)), a != null && n(a));
          }
        },
        s = r("WAWebHatchLinkedStatusManager"),
        u = s.subscribeToLinkedStatus(l);
      return (
        l(),
        !i &&
          a == null &&
          (s.getLastConfirmedLinkedStatusState() === "linked"
            ? s.fetchAndUpdateStatus()
            : s.fetchConfirmedLinkedStatusStateIfUnknown({
                ignoreStoredState: !0,
              })),
        u
      );
    }
    function h(e, t) {
      var n = c(function () {
          return { origin: t, source: p(t) };
        }),
        r = n[0],
        o = n[1];
      return (
        u(
          function () {
            if (t != null)
              return g(e, t, function (e) {
                return o(function (n) {
                  var r;
                  return n.origin === t &&
                    ((r = n.source) == null ? void 0 : r.vmKey) ===
                      (e == null ? void 0 : e.vmKey)
                    ? n
                    : { origin: t, source: e };
                });
              });
          },
          [e, t],
        ),
        r.origin === t ? r.source : null
      );
    }
    ((l.readShoppingOrigin = d),
      (l.readShoppingSource = m),
      (l.isShoppingSourceCurrent = f),
      (l.subscribeToShoppingSource = g),
      (l.useShoppingSource = h));
  },
  98,
);
