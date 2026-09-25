__d(
  "WAWebForwardContentMsgs",
  [
    "WALogger",
    "WAWebForwardAssociatedChildren",
    "WAWebForwardAssociationConfig",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e.flatMap(function (e) {
        return o("WAWebForwardAssociationConfig").isForwardContainerMsgType(
          e.type,
        )
          ? c(e)
          : [e];
      });
    }
    function u(e, t) {
      return e.flatMap(function (e) {
        if (
          !o("WAWebForwardAssociationConfig").isForwardContainerMsgType(e.type)
        )
          return [e];
        var n = c(e);
        return d(e, n, t) ? [e] : n;
      });
    }
    function c(e) {
      return o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
        e.id,
        o("WAWebViewMode.flow").ViewModeSurface.CHAT,
      );
    }
    function d(t, n, r) {
      var a = m(t, n, r);
      return a == null
        ? !0
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[forward album] sending ",
                " members loose instead of the album: ",
                "",
              ])),
            n.length,
            a,
          ),
          !1);
    }
    function m(e, t, n) {
      if (t.length === 0) return "no-members";
      var r = o(
          "WAWebForwardAssociatedChildren",
        ).getForwardableAssociatedChildren(n, e),
        a = r.forwardable;
      return a.length !== t.length
        ? "fan-out-carries-" +
            a.length +
            "-of-" +
            t.length +
            "-to-" +
            _(n.chatWid)
        : a.every(function (e) {
              var t = e.child;
              return o("WAWebMsgActionCapability").canForwardMsg(t);
            })
          ? p(e, a)
          : "member-not-forwardable";
    }
    function p(e, t) {
      var n = t.filter(function (e) {
          var t = e.child;
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
        }).length,
        r = t.filter(function (e) {
          var t = e.child;
          return t.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
        }).length;
      if (n + r !== t.length) return "member-is-not-image-or-video";
      var a = e.expectedImageCount,
        i = e.expectedVideoCount;
      return (a != null && n !== a) || (i != null && r !== i)
        ? "counts-" +
            n +
            "i" +
            r +
            "v-vs-declared-" +
            String(a) +
            "i" +
            String(i) +
            "v"
        : null;
    }
    function _(e) {
      return r("WAWebWid").isNewsletter(e)
        ? "channel"
        : e.isBot()
          ? "bot"
          : "chat";
    }
    ((l.getForwardContentMsgs = s),
      (l.getForwardContentMsgsForDestination = u));
  },
  98,
);
