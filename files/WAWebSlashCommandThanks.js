__d(
  "WAWebSlashCommandThanks",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebEmployeeCommandHandoff",
    "WAWebEmployeeCommandLimits",
    "WAWebExternalLink.react",
    "WAWebLexicalUtils",
    "WAWebMentionSuggestionsUtils",
    "WAWebNoop",
    "WAWebSlashCommandHandBack",
    "WAWebSlashCommandThanksRecipient",
    "WAWebSlashCommandsComposer",
    "WAWebSlashCommandsToolText",
    "WAWebSlashCommandsUsageLogger",
    "WDSIconIcFavoriteFilled.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = "https://www.internalfb.com/intern/whatsapp/thanks/start/",
      u = "https://me.internalmeta.com/community/thanks",
      c = 500,
      d = /^[\s,;:.!?\u2013\u2014-]*/;
    function m(e) {
      return Array.from(e).slice(0, 1e3).join("");
    }
    function p(e, t) {
      var n = new URL(u);
      return (
        n.searchParams.set("source", "whatsapp_web"),
        e.length > 0 && n.searchParams.set("message", m(e)),
        t != null &&
          (n.hash = new URLSearchParams({
            wa_origin: t.waOrigin,
            nonce: t.nonce,
          }).toString()),
        n.toString()
      );
    }
    var _ = {
      name: "thanks",
      group: "work_tools",
      Icon: r("WDSIconIcFavoriteFilled.react"),
      color: "pink",
      text: "optional",
      getDescription: function () {
        return s._(/*BTDS*/ "Thank a coworker in Thanks");
      },
      getTextPrompt: function (t) {
        var e;
        return (e = g(t)) != null ? e : y(t);
      },
      getRunLabel: function (t, n) {
        var e;
        return (
          n === void 0 && (n = ""),
          (e = v(t, n) ? h(t) : null) != null ? e : C(t)
        );
      },
      getDisabledReason: function (t, n) {
        var e;
        return (
          n === void 0 && (n = ""),
          v(t, n) &&
          o("WAWebEmployeeCommandLimits").getTextLength(
            N((e = t.mentions) != null ? e : [], n),
          ) > o("WAWebEmployeeCommandLimits").HANDOFF_LIMITS.thanksText
            ? s._(
                /*BTDS*/ '_j{"*":"Too long to post as a Thanks. Keep it to {limit} characters","_1":"Too long to post as a Thanks. Keep it to 1 character"}',
                [
                  s._plural(
                    o("WAWebEmployeeCommandLimits").HANDOFF_LIMITS.thanksText,
                    "limit",
                  ),
                ],
              )
            : null
        );
      },
      watchCard: function (t, n) {
        return o("WAWebEmployeeCommandHandoff").canHandOff("thanks")
          ? o("WAWebSlashCommandThanksRecipient").watchSoleThanksRecipient(t, n)
          : r("WAWebNoop");
      },
      isAvailable: function () {
        return o("WAWebEmployeeCommandHandoff").canOfferHandoff("thanks");
      },
      run: function (t, n) {
        var e,
          r = v(t, n),
          a = r ? N((e = t.mentions) != null ? e : [], n) : R(t, n),
          i = M(t, n),
          l = null,
          s = function (t) {
            return t === l || t === i;
          },
          u = b(t, n, i, s);
        (o("WAWebLexicalUtils").setTextContent(
          t.editor,
          "",
          o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG,
        ),
          t.clearQuotedMsg(),
          window.setTimeout(function () {
            f(t) &&
              (o("WAWebSlashCommandsComposer").setComposerTextNow(t.editor, i),
              o("WAWebSlashCommandHandBack").restoreReply(t),
              (l = t.editor
                .getEditorState()
                .read(o("WAWebLexicalUtils").$rootTextContent)));
          }, c),
          u &&
            o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
              action: "command_done",
              command: "thanks",
              chat: t.chat,
              prefilled: B(
                r
                  ? o(
                      "WAWebSlashCommandThanksRecipient",
                    ).getThanksRecipientPhones(t)
                  : [],
                a,
              ),
            }));
      },
    };
    function f(e) {
      var t = e.chat,
        n = e.editor;
      return (
        n.getRootElement() != null &&
        t.active !== !1 &&
        n.getEditorState().read(o("WAWebLexicalUtils").$rootTextContent) === ""
      );
    }
    function g(e) {
      return o("WAWebEmployeeCommandHandoff").canHandOff("thanks")
        ? (function (t) {
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.kind === "one" &&
              "name" in t
            ) {
              var n = t.name;
              return s._(
                /*BTDS*/ "Type your thanks to {name}, then press Enter",
                [s._param("name", n)],
              );
            }
            return ((typeof t == "object" && t !== null) ||
              typeof t == "function") &&
              t.kind === "none" &&
              o("WAWebSlashCommandThanksRecipient").getSoleThanksRecipientPhone(
                e,
              ) != null
              ? s._(/*BTDS*/ "Type your thanks, then press Enter")
              : null;
          })(x(e))
        : null;
    }
    function h(e) {
      return o("WAWebEmployeeCommandHandoff").canHandOff("thanks")
        ? (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "one" &&
              "name" in e
            ) {
              var t = e.name;
              return s._(
                /*BTDS*/ "Press Enter to post a Thanks to {name} and add its link",
                [s._param("name", t)],
              );
            }
            return ((typeof e == "object" && e !== null) ||
              typeof e == "function") &&
              e.kind === "none"
              ? s._(/*BTDS*/ "Press Enter to post your Thanks and add its link")
              : null;
          })(x(e))
        : null;
    }
    function y(e) {
      return (function (e) {
        return ((typeof e == "object" && e !== null) ||
          typeof e == "function") &&
          e.kind === "ask"
          ? P()
          : s._(/*BTDS*/ "Type your thanks. It'll be filled in on Thanks");
      })(x(e));
    }
    function C(e) {
      return (function (e) {
        return ((typeof e == "object" && e !== null) ||
          typeof e == "function") &&
          e.kind === "ask"
          ? P()
          : s._(/*BTDS*/ "Press Enter, then finish your thanks in Thanks");
      })(x(e));
    }
    function b(e, t, n, r) {
      var a,
        i = R(e, t);
      if (!v(e, t)) return (S(e, i, r), !0);
      var l = o("WAWebEmployeeCommandHandoff").createHandoffNonce(),
        s = function () {
          return L(e, i, l, r);
        },
        u = {
          context: e,
          draft: n,
          isOurDraft: r,
          message: N((a = e.mentions) != null ? a : [], t),
          nonce: l,
          pageMessage: i,
          phones: o(
            "WAWebSlashCommandThanksRecipient",
          ).getThanksRecipientPhones(e),
        };
      return E(u)
        ? !0
        : (o("WAWebSlashCommandHandBack").showHandBackFallback({
            fallbackOpened: !1,
            progress: null,
            reason: "disabled",
            text: I(function () {
              (o("WAWebSlashCommandsUsageLogger").logFallbackOpen(
                "thanks",
                e.chat,
              ),
                s());
            }),
          }),
          o("WAWebSlashCommandsUsageLogger").logThanksResult({
            chat: e.chat,
            fallbackReason: "disabled",
          }),
          !1);
    }
    function v(e, t) {
      var n;
      return (
        o("WAWebEmployeeCommandHandoff").canHandOff("thanks") &&
        o("WAWebSlashCommandThanksRecipient").getSoleThanksRecipientPhone(e) !=
          null &&
        N((n = e.mentions) != null ? n : [], t).trim() !== ""
      );
    }
    function S(e, t, n) {
      var r = o("WAWebEmployeeCommandHandoff").canHandOff("thanks"),
        a = I(function () {
          (o("WAWebSlashCommandsUsageLogger").logFallbackOpen("thanks", e.chat),
            r
              ? L(
                  e,
                  t,
                  o("WAWebEmployeeCommandHandoff").createHandoffNonce(),
                  n,
                )
              : o("WAWebExternalLink.react").openExternalLink(p(t, null), {
                  noApiCmdHandling: !0,
                }));
        }),
        i = a.blocked,
        l = a.open;
      o("WAWebSlashCommandHandBack").showLastingHandBackToast(i, l);
    }
    function R(e, t) {
      var n;
      return N((n = e.mentions) != null ? n : [], t, []);
    }
    function L(e, t, n, r) {
      (o("WAWebSlashCommandsUsageLogger").expectHandBack(
        "thanks",
        e.chat,
        B([], t),
        "prefilled_page",
      ),
        o("WAWebExternalLink.react").openExternalLink(
          p(t, { waOrigin: window.location.origin, nonce: n }),
          { noApiCmdHandling: !0 },
        ),
        k(e, n, r));
    }
    function E(t) {
      var n = t.context,
        r = t.draft,
        a = t.isOurDraft,
        i = t.message,
        l = t.nonce,
        u = t.pageMessage,
        c = t.phones,
        d = n.chat,
        m = null;
      o("WAWebSlashCommandsUsageLogger").expectHandBack("thanks", d, B(c, i));
      var _ = p(u, { waOrigin: window.location.origin, nonce: l }),
        f = o("WAWebEmployeeCommandHandoff").startHandoff({
          fallbackUrl: _,
          getData: function () {
            return { phones: c.join(","), text: i };
          },
          kind: "thanks",
          nonce: l,
          onFailure: function (t, i) {
            (o("WAWebSlashCommandHandBack").putDraftInChat(n, r),
              t === "timeout"
                ? T(d, m)
                : o("WAWebSlashCommandHandBack").showHandBackFallback({
                    fallbackOpened: i,
                    progress: m,
                    reason: t,
                    text: I(function () {
                      (o("WAWebSlashCommandsUsageLogger").logFallbackOpen(
                        "thanks",
                        d,
                      ),
                        o("WAWebExternalLink.react").openExternalLink(_, {
                          noApiCmdHandling: !0,
                        }));
                    }),
                  }),
              o("WAWebSlashCommandsUsageLogger").logThanksResult({
                chat: d,
                fallbackReason: t,
                fallbackOpened: i,
              }),
              k(n, l, a));
          },
          onResult: function (t) {
            return D(n, t, a, m);
          },
          startUrl: e,
          windowName: "wa_employee_thanks_" + l,
        });
      return (
        f &&
          (m = o("WAWebSlashCommandHandBack").showHandBackProgressToast(
            s._(/*BTDS*/ "Sending your thanks\u2026"),
          )),
        f
      );
    }
    function k(e, t, n) {
      o("WAWebEmployeeCommandHandoff").awaitHandoffLink({
        kind: "thanks",
        nonce: t,
        onResult: function (r) {
          return D(e, r, n);
        },
      });
    }
    function I(e) {
      return {
        failed: s._(/*BTDS*/ "Couldn't send your thanks automatically"),
        blocked: s._(/*BTDS*/ "Finish your thanks in Thanks"),
        open: {
          actionText: s._(/*BTDS*/ "Open Thanks"),
          onAction: e,
          testid: "slash-command-thanks-open-thanks",
        },
      };
    }
    function T(e, t) {
      o("WAWebSlashCommandHandBack").showHandBackNoAnswer({
        noAnswer: s._(/*BTDS*/ "Thanks didn't answer"),
        checkFirst: s._(
          /*BTDS*/ "It may have been posted. Check Thanks before trying again.",
        ),
        lastingAction: {
          actionText: s._(/*BTDS*/ "Check Thanks"),
          onAction: function () {
            (o("WAWebSlashCommandsUsageLogger").logFallbackOpen("thanks", e),
              o("WAWebExternalLink.react").openExternalLink(u, {
                noApiCmdHandling: !0,
              }));
          },
          testid: "slash-command-thanks-check-thanks",
        },
        progress: t,
      });
    }
    function D(e, t, n, r) {
      var a = e.chat,
        i = o("WAWebSlashCommandHandBack").appendToDraftInChat(e, n, t);
      (o("WAWebSlashCommandHandBack").showHandBackOutcomeToast({
        chat: a,
        link: t,
        outcome: i,
        progress: r,
        testid: "slash-command-thanks-link",
        text: {
          added: s._(/*BTDS*/ "Thanks link added"),
          addedInChat: function (t) {
            return s._(/*BTDS*/ "Thanks link added in {chat name}", [
              s._param("chat name", t),
            ]);
          },
          ready: s._(/*BTDS*/ "Your Thanks link is ready"),
        },
      }),
        o("WAWebSlashCommandsUsageLogger").logThanksResult({
          chat: a,
          outcome: i,
        }));
    }
    function x(e) {
      var t = o("WAWebSlashCommandThanksRecipient").getThanksRecipientPhones(
          e,
        ).length,
        n = o("WAWebSlashCommandThanksRecipient").getThanksRecipientName(e);
      return t > 1
        ? { kind: "many", count: t }
        : n != null
          ? { kind: "one", name: n }
          : $(e)
            ? { kind: "ask" }
            : { kind: "none" };
    }
    function $(e) {
      var t;
      return (
        o("WAWebChatGetters").getIsGroup(e.chat) &&
        ((t = e.mentions) != null ? t : []).length === 0 &&
        o("WAWebSlashCommandThanksRecipient").getThanksRecipient(e) == null
      );
    }
    function P() {
      return s._(/*BTDS*/ "Mention who you're thanking");
    }
    function N(e, t, n) {
      n === void 0 &&
        (n = o("WAWebSlashCommandThanksRecipient").getThankedMentions(e));
      for (
        var r = new Set(
            n.map(function (e) {
              return e.toString();
            }),
          ),
          a = "",
          i = t.trimStart(),
          l = 0;
        l < e.length && F(i, e[l].name) === 0;
      ) {
        var s,
          u,
          c = e[l],
          m = c.name,
          p = c.wid,
          _ = i.slice(m.length + 1),
          f = (s = (u = _.match(d)) == null ? void 0 : u[0]) != null ? s : "";
        (r.has(p.toString()) ||
          (a += o("WAWebSlashCommandsToolText").getToolMention(p, m) + f),
          (i = _.slice(f.length)),
          l++);
      }
      var g = "";
      for (var h of e.slice(l)) {
        var y = h.name,
          C = h.wid,
          b = F(i, y);
        b !== -1 &&
          ((g +=
            i.slice(0, b) +
            o("WAWebSlashCommandsToolText").getToolMentionName(C, y)),
          (i = i.slice(b + y.length + 1)));
      }
      return o("WAWebSlashCommandsToolText").hideNumberMentions(a + g + i);
    }
    function M(e, t) {
      var n,
        r = (n = e.mentions) != null ? n : [];
      if (r.length > 0) return w().toString() + " " + A(t, r);
      var o = O(e),
        a =
          o != null
            ? s._(/*BTDS*/ "Thanks {name}", [s._param("name", o)])
            : w();
      return t === "" ? a.toString() : a.toString() + " " + t;
    }
    function w() {
      return s._(/*BTDS*/ "Thanks");
    }
    function A(e, t) {
      var n = "",
        r = e;
      for (var a of t) {
        var i = a.name,
          l = a.wid,
          s = F(r, i);
        s !== -1 &&
          ((n +=
            r.slice(0, s) + o("WAWebMentionSuggestionsUtils").formatMention(l)),
          (r = r.slice(s + i.length + 1)));
      }
      return n + r;
    }
    function F(e, t) {
      var n = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return e.search(new RegExp("@" + n + "(?![\\p{L}\\p{N}_])", "u"));
    }
    function O(e) {
      var t = o("WAWebSlashCommandThanksRecipient").getThanksRecipient(e);
      return t == null
        ? null
        : o("WAWebChatGetters").getIsGroup(e.chat)
          ? o("WAWebMentionSuggestionsUtils").formatMention(t)
          : o("WAWebSlashCommandThanksRecipient").getContactName(t);
    }
    function B(e, t) {
      var n = t.trim() !== "";
      return e.length > 0
        ? n
          ? "message_and_person"
          : "person_only"
        : n
          ? "message_only"
          : "none";
    }
    ((l.THANKS_START_URL = e),
      (l.capPrefillText = m),
      (l.getThanksUrl = p),
      (l.WAWebSlashCommandThanks = _),
      (l.getThanksMessage = N),
      (l.getThanksChatDraft = M));
  },
  226,
);
