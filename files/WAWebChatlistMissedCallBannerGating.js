__d(
  "WAWebChatlistMissedCallBannerGating",
  [
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebFrontendContactGetters",
    "WAWebMissedCallCountUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebShouldShowCallButtons",
    "WAWebUserPrefsMultiDevice",
    "WAWebVoipCallsTabCallInfoUtils",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState,
      m = 900,
      p = new Set(),
      _ = new Set(),
      f = new Map();
    function g() {
      var e = E().find(function (e) {
        var t = e.msg;
        return !p.has(t.id.toString());
      });
      return e == null || !o("WAWebVoipGatingUtils").isCallingEnabled()
        ? null
        : {
            chat: e.chat,
            isVideo: o("WAWebMsgGetters").getIsVideoCall(e.msg),
            msg: e.msg,
          };
    }
    function h() {
      var e = o("react-compiler-runtime").c(10),
        t = d(g),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            (L(), a(g()));
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = i,
        s;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = []), (e[1] = s))
        : (s = e[1]),
        c(y, s));
      var u;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { maxWait: 1e3 }), (e[2] = u))
        : (u = e[2]);
      var p = r("useWAWebDebouncedCallback")(l, 500, u);
      (o("useWAWebListener").useListener(
        r("WAWebVoipCallsTabPanelManager"),
        "onWriteCallLogMessage",
        l,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove change:msgsLength change:isLocked",
          p,
        ),
        o("useWAWebListener").useListener(
          o("WAWebContactCollection").ContactCollection,
          "add remove change:isContactBlocked change:name",
          p,
        ));
      var _ = o("useWAWebTimeout").useManualTimeout(l),
        f = _[0],
        h = _[1],
        C,
        b;
      (e[3] !== h || e[4] !== n || e[5] !== f
        ? ((C = function () {
            if (n != null)
              return (
                f(
                  Math.max(
                    (o("WAWebMsgGetters").getT(n.msg) + m) * 1e3 -
                      o("WATimeUtils").unixTimeMs(),
                    0,
                  ),
                ),
                h
              );
          }),
          (b = [n, h, f]),
          (e[3] = h),
          (e[4] = n),
          (e[5] = f),
          (e[6] = C),
          (e[7] = b))
        : ((C = e[6]), (b = e[7])),
        c(C, b));
      var v;
      return (
        e[8] !== n
          ? ((v = { candidate: n, refreshCandidate: l }),
            (e[8] = n),
            (e[9] = v))
          : (v = e[9]),
        v
      );
    }
    function y() {
      L();
    }
    function C(e) {
      return p.has(e);
    }
    function b(e) {
      (p.add(e), f.delete(e));
    }
    function v(e) {
      p.delete(e);
    }
    function S(e) {
      var t = e.msg.id.toString();
      (_.has(t) ||
        (_.add(t),
        o("WAWebCoreActionsODS").logChatlistMissedCallBanner("shown")),
        f.set(t, { chat: e.chat, msg: e.msg }));
    }
    function R() {
      (p.clear(), _.clear(), f.clear());
    }
    function L() {
      if (f.size !== 0) {
        var e = new Set(
          E().map(function (e) {
            var t = e.msg;
            return t.id.toString();
          }),
        );
        for (var t of f) {
          var n,
            r = t[0],
            a = t[1].chat;
          e.has(r) ||
            (f.delete(r),
            o("WAWebCoreActionsODS").logChatlistMissedCallBanner(
              ((n = D(a)) == null ? void 0 : n.id.toString()) === r
                ? "auto_dismiss"
                : "superseded",
            ));
        }
      }
    }
    function E() {
      var e = o("WATimeUtils").unixTime() - m,
        t = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
        n = [];
      return (
        o("WAWebChatCollection").ChatCollection.forEach(function (r) {
          var o = k(r, e, t);
          o != null && n.push({ chat: r, msg: o });
        }),
        n.sort(function (e, t) {
          return (
            o("WAWebMsgGetters").getT(t.msg) - o("WAWebMsgGetters").getT(e.msg)
          );
        })
      );
    }
    function k(e, t, n) {
      if (!I(e) || e.isLocked) return null;
      var r = D(e);
      return r == null ||
        o("WAWebMsgGetters").getT(r) <= t ||
        (n != null && o("WAWebMsgGetters").getT(r) <= n) ||
        !T(r) ||
        !o("WAWebFrontendContactGetters").getIsMyContact(e.contact) ||
        !o("WAWebShouldShowCallButtons").shouldShowCallButtons(e)
        ? null
        : r;
    }
    function I(e) {
      return (
        !o("WAWebChatGetters").getIsGroup(e) &&
        !o("WAWebChatGetters").getIsNewsletter(e) &&
        !o("WAWebChatGetters").getIsBroadcast(e)
      );
    }
    function T(e) {
      return (
        o("WAWebMissedCallCountUtils").isInboundMissedCall(e) &&
        !o("WAWebMsgGetters").getIsAdHocGroupCall(e) &&
        !o("WAWebMsgGetters").getIsCallLink(e) &&
        o("WAWebVoipCallsTabCallInfoUtils").getShouldShowInCallsTabCallLog(e)
      );
    }
    function D(e) {
      var t = null;
      for (var n of (r = (a = e.msgs) == null ? void 0 : a.getModelsArray()) !=
      null
        ? r
        : []) {
        var r, a;
        n.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
          (t == null ||
            o("WAWebMsgGetters").getT(n) >= o("WAWebMsgGetters").getT(t)) &&
          (t = n);
      }
      return t;
    }
    ((l.MISSED_CALL_BANNER_RECENCY_WINDOW_SECONDS = m),
      (l.getMissedCallBannerCandidate = g),
      (l.useMissedCallBannerCandidate = h),
      (l.isMissedCallBannerHandled = C),
      (l.markMissedCallBannerHandled = b),
      (l.unmarkMissedCallBannerHandled = v),
      (l.trackMissedCallBannerShown = S),
      (l.resetMissedCallBannerStateForTesting = R));
  },
  98,
);
