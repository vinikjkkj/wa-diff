__d(
  "WAWebSyncButtonState",
  [
    "WANullthrows",
    "WAWebBizInteractiveMessageQuickReplyAction",
    "WAWebFrontendMsgGetters",
    "WAWebMsgButtonReplyMsgCollection",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebTemplateButtonReplyMsgCollection",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      (s(e), u(e), c(e));
    }
    function s(e) {
      for (
        var t = function () {
            var t = e[a];
            if (!t || t.selectedCarouselCardIndex != null) return 0;
            if (d(t)) {
              var n = o("WAWebFrontendMsgGetters").getChat(t);
              n.msgUnsyncedButtonReplyMsgs == null &&
                (n.msgUnsyncedButtonReplyMsgs = new (r(
                  "WAWebMsgButtonReplyMsgCollection",
                ))());
              var i = n.msgUnsyncedButtonReplyMsgs,
                l = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
              if (!l) return 0;
              var s = i.get(l.id);
              s ||
                (i.add({
                  id: l.id,
                  unsyncedButtonReplies: new (r(
                    "WAWebTemplateButtonReplyMsgCollection",
                  ))(),
                }),
                (s = i.get(l.id)));
              var u = r("WANullthrows")(s),
                c = u.unsyncedButtonReplies;
              c.add(t);
              var m = o("WAWebMsgCollection").MsgCollection.get(l.id);
              if (m != null && m.buttons) {
                var p = m.buttons.get("" + r("WANullthrows")(t.selectedIndex));
                (p && (p.selected = !0), c.remove(t));
              }
            } else if (t.isFromTemplate && t.buttons) {
              var _ = o("WAWebFrontendMsgGetters").getChat(t),
                f = _.msgUnsyncedButtonReplyMsgs;
              if (f == null) return 0;
              var g = f.get(t.id);
              g &&
                (g.unsyncedButtonReplies.forEach(function (e) {
                  var n = r("WANullthrows")(t.buttons).get(
                    "" + r("WANullthrows")(e.selectedIndex),
                  );
                  n && (n.selected = !0);
                }),
                g.unsyncedButtonReplies.delete());
            }
          },
          n,
          a = 0;
        a < e.length;
        a++
      )
        n = t();
    }
    function u(e) {
      for (
        var t = function () {
            var t = e[r];
            if (!t || t.selectedCarouselCardIndex != null) return 0;
            if (
              t.type === o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE &&
              t.selectedButtonId != null &&
              m(t)
            ) {
              var n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
              if (!n) return 0;
              var a = o("WAWebMsgCollection").MsgCollection.get(n.id);
              if (a != null && a.replyButtons) {
                var i = a.replyButtons.get(t.selectedButtonId);
                i && (i.selected = !0);
              }
            } else if (
              t.isDynamicReplyButtonsMsg &&
              t.replyButtons &&
              t.replyButtons.every(function (e) {
                return !e.selected;
              }) &&
              o("WAWebFrontendMsgGetters").getChat(t)
            ) {
              var l = Math.max(
                0,
                o("WAWebFrontendMsgGetters").getChat(t).msgs.length - 1e3,
              );
              o("WAWebFrontendMsgGetters")
                .getChat(t)
                .msgs.getModelsArray()
                .slice(l)
                .filter(function (e) {
                  var n;
                  return (
                    e.type === o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE &&
                    e.selectedButtonId != null &&
                    m(e) &&
                    ((n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e)) ==
                    null
                      ? void 0
                      : n.id.toString()) === t.id.toString()
                  );
                })
                .map(function (e) {
                  var t = e.selectedButtonId;
                  return t;
                })
                .forEach(function (e) {
                  var n,
                    r = (n = t.replyButtons) == null ? void 0 : n.get(e);
                  r != null && (r.selected = !0);
                });
            }
          },
          n,
          r = 0;
        r < e.length;
        r++
      )
        n = t();
    }
    function c(e) {
      for (
        var t = function () {
            var t = e[a];
            if (!t) return 0;
            if (d(t) && t.selectedCarouselCardIndex != null) {
              var n = r("WANullthrows")(t.selectedCarouselCardIndex),
                i = r("WANullthrows")(t.selectedIndex),
                l = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
              if (!l) return 0;
              var s = o("WAWebMsgCollection").MsgCollection.get(l.id);
              if (
                s == null ||
                s.carouselCardsParsed == null ||
                s.carouselCardsParsed[n] == null
              )
                return 0;
              var u = s.carouselCardsParsed.slice();
              ((u[n] = babelHelpers.extends({}, u[n], {
                interactivePayload: o(
                  "WAWebBizInteractiveMessageQuickReplyAction",
                ).rebuildInteractivePayloadWithDisabledButton(
                  u[n].interactivePayload,
                  i,
                ),
              })),
                (s.carouselCardsParsed = u));
            } else if (
              t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              t.carouselCardsParsed != null &&
              o("WAWebFrontendMsgGetters").getChat(t)
            ) {
              var c = Math.max(
                  0,
                  o("WAWebFrontendMsgGetters").getChat(t).msgs.length - 1e3,
                ),
                m = o("WAWebFrontendMsgGetters")
                  .getChat(t)
                  .msgs.getModelsArray()
                  .slice(c)
                  .filter(function (e) {
                    var n;
                    return (
                      d(t) &&
                      e.selectedCarouselCardIndex != null &&
                      ((n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e)) ==
                      null
                        ? void 0
                        : n.id.toString()) === t.id.toString()
                    );
                  });
              if (m.length === 0) return 0;
              var p = r("WANullthrows")(t.carouselCardsParsed).slice();
              for (var _ of m) {
                var f = r("WANullthrows")(_.selectedCarouselCardIndex),
                  g = r("WANullthrows")(_.selectedIndex);
                p[f] != null &&
                  (p[f] = babelHelpers.extends({}, p[f], {
                    interactivePayload: o(
                      "WAWebBizInteractiveMessageQuickReplyAction",
                    ).rebuildInteractivePayloadWithDisabledButton(
                      p[f].interactivePayload,
                      g,
                    ),
                  }));
              }
              t.carouselCardsParsed = p;
            }
          },
          n,
          a = 0;
        a < e.length;
        a++
      )
        n = t();
    }
    function d(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY &&
        e.selectedIndex != null &&
        m(e)
      );
    }
    var m = function (t) {
      var e = o("WAWebMsgGetters").getSender(t);
      return e != null ? o("WAWebUserPrefsMeUser").isMeAccount(e) : !1;
    };
    l.default = e;
  },
  98,
);
