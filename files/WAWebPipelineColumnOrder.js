__d(
  "WAWebPipelineColumnOrder",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebCustomerContactResolver",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
    function u(e, t) {
      var n = e.lastMessageT,
        r = t.lastMessageT;
      return n != null && r != null
        ? r - n || s.compare(e.sortName, t.sortName)
        : n != null
          ? -1
          : r != null
            ? 1
            : s.compare(e.sortName, t.sortName);
    }
    function c(e) {
      var t = new Map();
      for (var n of e) {
        var r = d(n);
        if (r != null) {
          var o = t.get(r.candidateLid);
          (o == null || (o.lastMessageT == null && r.lastMessageT != null)) &&
            t.set(r.candidateLid, r);
        }
      }
      return [].concat(Array.from(t.values())).sort(u);
    }
    function d(e) {
      var t,
        n = m(e);
      if (n == null || !n.isUser()) return null;
      var r = n.isLid()
          ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(n)
          : o("WAWebChatCollection").ChatCollection.get(n),
        a =
          (t = r == null ? void 0 : r.accountLid) != null
            ? t
            : o("WAWebLidMigrationUtils").toUserLid(n);
      if (a == null) return null;
      var i = o("WAWebCustomerContactResolver").resolveCustomerContact(n);
      return {
        candidateLid: a.user,
        chatJid: e,
        lastMessageT: r == null ? void 0 : r.t,
        sortName:
          i != null ? o("WAWebFrontendContactGetters").getDisplayName(i) : "",
      };
    }
    function m(t) {
      try {
        return o("WAWebWidFactory").createWid(t);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:pipeline] skipping unparseable chat jid from label_sublist",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("cm-pipeline-order-bad-chat-jid"),
          null
        );
      }
    }
    ((l.comparePipelineSortKeys = u), (l.orderColumnMembers = c));
  },
  98,
);
