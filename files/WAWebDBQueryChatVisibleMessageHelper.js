__d(
  "WAWebDBQueryChatVisibleMessageHelper",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebFutureproofReparseMsgsAction",
    "WAWebMsgType",
    "WAWebReparseRichResponseMsgs",
    "WAWebRichResponse.flow",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["limit"];
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.lowerBound,
            r = t.upperBound,
            a = t.options,
            i = t.count,
            l = t.addOnReparseExclusionList,
            u = l === void 0 ? [] : l,
            c = t.index,
            m = a.limit,
            p = babelHelpers.objectWithoutPropertiesLoose(a, s),
            _ = o("WAWebABProps").getABPropConfigValue(
              "web_init_chat_max_unread_message_count",
            ),
            f = [],
            g = [],
            h = 0,
            y = 0,
            C = !1,
            b = function (t) {
              return (
                y++,
                i != null && h === i
                  ? !0
                  : (o("WAWebDBMessageStoreUtils").shouldRenderInUI(t, u) &&
                      (o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                        o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                        t.viewMode,
                      ) && h++,
                      h > _ && (C = !0)),
                    !1)
              );
            },
            v = self.performance.now(),
            S = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(c != null ? c : ["internalId"], n, r, p, b);
          C &&
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "queryChatVisibleMessageHelper: visible ",
                  " > limit ",
                  "",
                ])),
              h,
              _,
            );
          var R = S.filter(function (e) {
            if (o("WAWebDBMessageStoreUtils").isFutureproof(e)) {
              var t = o("WAWebDBMessageSerialization").messageFromDbRow(e),
                n = o(
                  "WAWebDBAddOnProviders",
                ).getAddOnProviderForFutureproofMsg(t);
              e.futureproofReparsed !== !0 &&
                (!n ||
                  (n != null &&
                    n.canRenderInUi(t) &&
                    !u.includes(e.id.toString()))) &&
                f.push(e);
            } else d(e) && g.push(e);
            return !(
              !o("WAWebDBMessageStoreUtils").shouldRenderInUI(e, u) ||
              o("WAWebDBMessageStoreUtils").isInvalidCAGSystemMessage(e)
            );
          });
          return (
            yield o("WAWebDBMessageStoreUtils").maybeUpdateMsgAck(R),
            f.length &&
              o("WAWebFutureproofReparseMsgsAction").processFutureproof(f),
            g.length &&
              o("WAWebReparseRichResponseMsgs").reparseRichResponseMsgs(g),
            R
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t;
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
        ((t = e.richResponse) == null ? void 0 : t.parseState) !==
          o("WAWebRichResponse.flow").RichResponseParseState.Parsed
      );
    }
    l.queryChatVisibleMessageHelper = u;
  },
  98,
);
