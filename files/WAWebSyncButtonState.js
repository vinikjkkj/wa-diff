__d(
  "WAWebSyncButtonState",
  [
    "WALogger",
    "WANullthrows",
    "WAWebBizInteractiveMessageQuickReplyAction",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveCtaActions",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgButtonReplyMsgCollection",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebTemplateButtonReplyMsgCollection",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      (c(e), d(e), m(e), p(e));
    }
    function c(e) {
      for (
        var t = function () {
            var t = e[a];
            if (!t || t.selectedCarouselCardIndex != null) return 0;
            if (h(t)) {
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
              var d = o("WAWebMsgCollection").MsgCollection.get(l.id);
              if (d != null && d.buttons) {
                var m = d.buttons.get("" + r("WANullthrows")(t.selectedIndex));
                (m && (m.selected = !0), c.remove(t));
              }
            } else if (t.isFromTemplate && t.buttons) {
              var p = o("WAWebFrontendMsgGetters").getChat(t),
                _ = p.msgUnsyncedButtonReplyMsgs;
              if (_ == null) return 0;
              var f = _.get(t.id);
              f &&
                (f.unsyncedButtonReplies.forEach(function (e) {
                  var n = r("WANullthrows")(t.buttons).get(
                    "" + r("WANullthrows")(e.selectedIndex),
                  );
                  n && (n.selected = !0);
                }),
                f.unsyncedButtonReplies.delete());
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
      for (
        var t = function () {
            var t = e[r];
            if (!t || t.selectedCarouselCardIndex != null) return 0;
            if (
              t.type === o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE &&
              t.selectedButtonId != null &&
              y(t)
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
                    y(e) &&
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
    function m(e) {
      for (
        var t = function () {
            var t = e[a];
            if (!t) return 0;
            if (h(t) && t.selectedCarouselCardIndex != null) {
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
                d = o("WAWebFrontendMsgGetters")
                  .getChat(t)
                  .msgs.getModelsArray()
                  .slice(c)
                  .filter(function (e) {
                    var n;
                    return (
                      h(t) &&
                      e.selectedCarouselCardIndex != null &&
                      ((n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e)) ==
                      null
                        ? void 0
                        : n.id.toString()) === t.id.toString()
                    );
                  });
              if (d.length === 0) return 0;
              var m = r("WANullthrows")(t.carouselCardsParsed).slice();
              for (var p of d) {
                var _ = r("WANullthrows")(p.selectedCarouselCardIndex),
                  f = r("WANullthrows")(p.selectedIndex);
                m[_] != null &&
                  (m[_] = babelHelpers.extends({}, m[_], {
                    interactivePayload: o(
                      "WAWebBizInteractiveMessageQuickReplyAction",
                    ).rebuildInteractivePayloadWithDisabledButton(
                      m[_].interactivePayload,
                      f,
                    ),
                  }));
              }
              t.carouselCardsParsed = m;
            }
          },
          n,
          a = 0;
        a < e.length;
        a++
      )
        n = t();
    }
    function p(e) {
      for (
        var t = function () {
            var t = e[a];
            if (!t) return 0;
            if (_(t)) {
              var n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
              if (!n) return 0;
              var i = o("WAWebMsgCollection").MsgCollection.get(n.id);
              i != null && f(i, t);
            } else if (
              t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              t.interactivePayload != null &&
              t.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY &&
              o("WAWebFrontendMsgGetters").getChat(t)
            ) {
              var l = o("WAWebFrontendMsgGetters").getChat(t),
                s = Math.max(0, l.msgs.length - 1e3);
              l.msgs
                .getModelsArray()
                .slice(s)
                .filter(function (e) {
                  var n;
                  return (
                    _(e) &&
                    ((n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e)) ==
                    null
                      ? void 0
                      : n.id.toString()) === t.id.toString()
                  );
                })
                .forEach(function (e) {
                  f(t, e);
                });
            }
          },
          n,
          a = 0;
        a < e.length;
        a++
      )
        n = t();
    }
    function _(e) {
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE ||
        e.interactivePayload == null ||
        !y(e)
      )
        return !1;
      var t = e.interactivePayload;
      return (
        t.name === r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS
      );
    }
    function f(t, n) {
      var a,
        i = g(n);
      if (i != null) {
        var l =
          (a = o(
            "WAWebGetInteractiveCtaActions",
          ).getNativeFlowCtasFromInteractiveMsg(t)) == null
            ? void 0
            : a.find(function (e) {
                return e.name === "quick_reply" && e.data.selectionId === i;
              });
        l == null ||
          l.data.disabled === !0 ||
          o("WAWebBizInteractiveMessageQuickReplyAction")
            .markInteractiveButtonClicked(t, l.index)
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncButtonState: failed to persist proactive CTA disable",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("menu-options-cta-disable-failed");
            });
      }
    }
    function g(e) {
      if (e.interactivePayload == null) return null;
      var t = e.interactivePayload;
      try {
        var n = JSON.parse(t.paramsJson);
        return n == null || typeof n != "object"
          ? null
          : typeof n.id == "string"
            ? n.id
            : null;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncButtonState: failed to parse menu_options paramsJson",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("menu-options-params-parse-failed"),
          null
        );
      }
    }
    function h(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY &&
        e.selectedIndex != null &&
        y(e)
      );
    }
    var y = function (t) {
      var e = o("WAWebMsgGetters").getSender(t);
      return e != null ? o("WAWebUserPrefsMeUser").isMeAccount(e) : !1;
    };
    l.default = u;
  },
  98,
);
