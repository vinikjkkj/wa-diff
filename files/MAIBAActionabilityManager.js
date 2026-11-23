__d(
  "MAIBAActionabilityManager",
  [
    "ALChannel",
    "AdsALEAUtils",
    "AdsExperimentsFunnelLogger",
    "AdsExperimentsToolbarTestButtonModalAction",
    "AdsHelpTrayIPChatUILogger",
    "ExecutionEnvironment",
    "FBLogger",
    "JSResource",
    "MAIBAActionabilityConstants",
    "MAIBAActionabilityURLUtils",
    "MAIBAChatAppUIActions",
    "MAIBADeeplinkPromptStore",
    "MAIBAInlinedContext",
    "MAIBAVisualContextSurfaceData",
    "adsUserSettingsIsAdsAIConsentedSelector",
    "isStringNullOrEmpty",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [],
      c = !1,
      d = [],
      m = !1,
      p = new Set([
        (s = o("MAIBAActionabilityConstants")).ACTION_HIGHLIGHT,
        s.ACTION_CLICK,
        s.ACTION_OPEN,
      ]),
      _ = new Set([
        s.SURFACE_MAIBA_CHAT,
        s.SURFACE_AB_TEST_MODAL,
        s.SURFACE_AM_AB_TEST_TOOLBAR_BUTTON,
        s.SURFACE_AM_OPEN_CREATE_MODAL,
      ]),
      f = new Set([
        "prompt_text",
        "prompt_id",
        "recommendation_hash",
        "hide_user_message",
        "dl_token",
      ]),
      g = new Set(["prompt_text", "hide_user_message"]);
    function h(e) {
      if (r("isStringNullOrEmpty")(e) || e.length > 4096) return !1;
      var t = [
        /<script/i,
        /javascript:/i,
        /\bon\w+=/i,
        /data:text\/html/i,
        /<iframe/i,
        /<object/i,
        /<embed/i,
      ];
      for (var n of t) if (n.test(e)) return !1;
      var o = e.split(",");
      for (var a of o) if (!y(a)) return !1;
      return !0;
    }
    function y(e) {
      if (r("isStringNullOrEmpty")(e)) return !1;
      var t = e.split(">"),
        n = t[0],
        o = t[1];
      if (r("isStringNullOrEmpty")(n) || r("isStringNullOrEmpty")(o)) return !1;
      var a = D(n),
        i = a.surface;
      if (!_.has(i)) return !1;
      var l = o.split("?"),
        s = l[0];
      return !!p.has(s);
    }
    function C() {
      m ||
        ((m = !0),
        (c = !1),
        b(),
        r("ALChannel").addListener("al_surface_mutation_event", function (e) {
          var t = e.event,
            n = e.surface;
          switch (t) {
            case "mount_component":
              S(n);
              break;
            case "unmount_component":
              break;
          }
        }));
    }
    function b() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = new URLSearchParams(window.location.search),
          n = t.get("maiba_actions");
        r("isStringNullOrEmpty")(n) ||
          (v(n), o("MAIBAActionabilityURLUtils").removeMAIBAActionsFromURL());
      }
    }
    function v(e) {
      if (!h(e))
        return (
          r("FBLogger")("maiba_actionability").warn(
            "Invalid, unsupported, or potentially malicious maiba_actions parameter detected",
          ),
          !1
        );
      var t = k(e);
      return r("isStringNullOrEmpty")(t) ? !1 : (R(t), !0);
    }
    function S(e) {
      T(e);
    }
    function R(t, n, o) {
      var a = t == null ? void 0 : t.split(",");
      if (
        (c ? (u = a) : (u = a.length > 0 ? [a[0]] : []),
        n != null && (e || (e = r("ExecutionEnvironment"))).canUseDOM)
      ) {
        var i = new URL(window.location.href);
        (i.searchParams.set("bot_response_id", n),
          window.history.replaceState({}, "", i));
      }
      T(void 0, o);
    }
    function L(e, t) {
      return r("isStringNullOrEmpty")(e)
        ? ""
        : e
            .split(",")
            .map(function (e) {
              return e.replace(/\[([^\]=]+)=[^\]]*\]/g, function (e, n) {
                return t.has(n.trim()) ? "" : e;
              });
            })
            .join(",");
    }
    function E(e) {
      return L(e, f);
    }
    function k(e) {
      return L(e, g);
    }
    function I(e, t) {
      var n = E(e);
      r("isStringNullOrEmpty")(n) || R(n, t);
    }
    function T(e, t) {
      var n, a;
      if (u.length !== 0) {
        var l = (n = u) == null ? void 0 : n.at(0),
          s = (a = l == null ? void 0 : l.split(">")) != null ? a : ["", ""],
          c = s[0],
          d = s[1],
          m = D(c),
          p = m.specifiers,
          _ = m.surface;
        if (
          _ === o("MAIBAActionabilityConstants").SURFACE_MAIBA_CHAT &&
          d === o("MAIBAActionabilityConstants").ACTION_OPEN
        ) {
          var f,
            g,
            h,
            y =
              (f = r("adsUserSettingsIsAdsAIConsentedSelector")()) != null
                ? f
                : !1,
            C = r("uuidv4")(),
            b = p.prompt_id,
            v = p.prompt_text,
            S = p.recommendation_hash,
            R = p.dl_token;
          R != null
            ? (o("MAIBADeeplinkPromptStore").setPendingDeeplinkToken(R),
              r("JSResource")("MAIBAChatMessageList.react")
                .__setRef("MAIBAActionabilityManager")
                .preload())
            : b != null && v != null
              ? (o("MAIBADeeplinkPromptStore").setPendingDeeplinkPrompt(b, v),
                o("MAIBADeeplinkPromptStore").setPendingDeeplinkHideUserMessage(
                  p.hide_user_message === "1",
                ),
                r("JSResource")("MAIBAChatMessageList.react")
                  .__setRef("MAIBAActionabilityManager")
                  .preload())
              : S != null &&
                (o(
                  "MAIBADeeplinkPromptStore",
                ).setPendingDeeplinkRecommendationHash(S),
                r("JSResource")("MAIBAChatMessageList.react")
                  .__setRef("MAIBAActionabilityManager")
                  .preload());
          var L =
            (g =
              (h = o("MAIBAInlinedContext").getInlinedContext()) == null
                ? void 0
                : h.surface) != null
              ? g
              : "";
          o("AdsHelpTrayIPChatUILogger").logAdsAIEntrypointClick({
            act: p.act,
            channel: p.channel,
            entrypoint: "DEEPLINK_AM",
            entrypoint_click_id: C,
            prompt_id: p.prompt_id,
            recommendationHashString: p.recommendation_hash,
            surface: L,
            tip_name: p.tip_name,
          });
          var E = p.thread_key;
          (o("MAIBAChatAppUIActions").openMAIBAChatThread(
            E != null
              ? {
                  externalConversationId: E,
                  linkedAdAccountId: p.act,
                  showConsentDisclaimer: !y,
                }
              : { showConsentDisclaimer: !y },
            void 0,
            "DEEPLINK_AM",
            L,
          ),
            u.shift(),
            T());
          return;
        }
        if (
          _ === o("MAIBAActionabilityConstants").SURFACE_AB_TEST_MODAL &&
          d === o("MAIBAActionabilityConstants").ACTION_OPEN
        ) {
          (r("AdsExperimentsFunnelLogger").logCreationAction({
            entryPoint: "MAIBA",
            firstComponentName: "ads_manager_test_toolbar_dialog",
            funnelEntranceAction: "AM_TEST_TOOLBAR_DIALOG_CLICK",
            name: "ENTER_FUNNEL",
            testType: "CAMPAIGN_COMPARISON",
          }),
            r("AdsExperimentsToolbarTestButtonModalAction").dispatch(
              { showModal: !0, source: "MAIBA" },
              {
                line: "465",
                module: "MAIBAActionabilityManager.js",
                moduleID: i.id,
              },
            ),
            u.shift(),
            T(void 0, t));
          return;
        }
        if (!(e != null && e !== _)) {
          var k = P(_, t),
            I =
              k == null
                ? void 0
                : k
                    .map(function (e) {
                      return N(e, p);
                    })
                    .find(Boolean);
          if (I != null) {
            var x = d.split("?"),
              w = x[0];
            switch (
              (I == null || I.scrollIntoView == null || I.scrollIntoView(), w)
            ) {
              case o("MAIBAActionabilityConstants").ACTION_HIGHLIGHT:
                M(I);
                break;
              case o("MAIBAActionabilityConstants").ACTION_CLICK:
                I == null || I.click();
                break;
              case o("MAIBAActionabilityConstants").ACTION_SCROLL:
                t === !0 &&
                  (I == null ||
                    I.scrollIntoView == null ||
                    I.scrollIntoView({ behavior: "smooth", block: "center" }));
                break;
              case o("MAIBAActionabilityConstants").ACTION_FILL: {
                if (!$(_, t)) break;
                var A = d.split("?"),
                  B = A[1];
                if (B != null && I instanceof HTMLInputElement) {
                  var W = B.startsWith("value=") ? B.slice(6) : B,
                    q = F(W);
                  O(I, q);
                }
                break;
              }
              default:
                break;
            }
            (u.shift(), T(void 0, t));
          }
        }
      }
    }
    function D(e) {
      var t = { surface: e, specifiers: {} },
        n = e.match(/\[(.*?)\]/g);
      return (
        n &&
          ((t.surface = e.replace(/\[(.*?)\]/g, "")),
          n.forEach(function (e) {
            var n = e.slice(1, -1),
              r = n.split("=");
            if (r.length === 2) {
              var a = r[0],
                i = r[1];
              if (a === "inputRole")
                t.specifiers = babelHelpers.extends({}, t.specifiers, {
                  inputRole: i,
                });
              else if (a === "label")
                t.specifiers = babelHelpers.extends({}, t.specifiers, {
                  label: i,
                });
              else if (a === "channel")
                o("MAIBAActionabilityConstants").VALID_CHANNELS.has(i) &&
                  (t.specifiers = babelHelpers.extends({}, t.specifiers, {
                    channel: i,
                  }));
              else if (a === "dl_token")
                t.specifiers = babelHelpers.extends({}, t.specifiers, {
                  dl_token: i,
                });
              else if (a === "tip_id") {
                var l = parseInt(i, 10);
                !isNaN(l) &&
                  l >= 0 &&
                  l < o("MAIBAActionabilityConstants").TIP_NAMES.length &&
                  (t.specifiers = babelHelpers.extends({}, t.specifiers, {
                    tip_name: o("MAIBAActionabilityConstants").TIP_NAMES[l],
                  }));
              } else if (a === "tip_name")
                t.specifiers = babelHelpers.extends({}, t.specifiers, {
                  tip_name: i,
                });
              else if (a === "thread_key")
                t.specifiers = babelHelpers.extends({}, t.specifiers, {
                  thread_key: i,
                });
              else if (a === "prompt_id")
                t.specifiers = babelHelpers.extends({}, t.specifiers, {
                  prompt_id: i,
                });
              else if (a === "prompt_text") {
                var s = i;
                try {
                  s = decodeURIComponent(i);
                } catch (e) {}
                t.specifiers = babelHelpers.extends({}, t.specifiers, {
                  prompt_text: s,
                });
              } else
                a === "act"
                  ? /^\d+$/.test(i) &&
                    (t.specifiers = babelHelpers.extends({}, t.specifiers, {
                      act: i,
                    }))
                  : a === "recommendation_hash"
                    ? (t.specifiers = babelHelpers.extends({}, t.specifiers, {
                        recommendation_hash: i,
                      }))
                    : a === "hide_user_message" &&
                      i === "1" &&
                      (t.specifiers = babelHelpers.extends({}, t.specifiers, {
                        hide_user_message: "1",
                      }));
            }
          })),
        t
      );
    }
    function x() {
      c = !0;
    }
    function $(e, t) {
      return (
        t === !0 &&
        o("MAIBAActionabilityConstants").FILL_ELIGIBLE_SURFACES.has(e)
      );
    }
    function P(e, t) {
      var n,
        r = o("AdsALEAUtils").buildSurfaceMap();
      return !c && t !== !0 && !_.has(e) ? [] : (n = r.get(e)) != null ? n : [];
    }
    function N(e, t) {
      if (Object.keys(t).length === 0) return e;
      var n = e.querySelectorAll('[role="button"], input');
      return Array.from(n).find(function (e) {
        var n = o("MAIBAVisualContextSurfaceData").extractInputElementData(e);
        if (
          (t.label == null || n.label === t.label) &&
          (t.inputRole == null || n.role === t.inputRole)
        )
          return !0;
      });
    }
    function M(e) {
      var t = e;
      (e instanceof HTMLInputElement &&
        e.parentElement instanceof HTMLElement &&
        (t = e.parentElement),
        d.push(t),
        t.style.setProperty("transition", "box-shadow 1s ease-in-out"),
        t.style.setProperty(
          "box-shadow",
          "0 0 20px 10px rgba(24, 119, 242, 0.8)",
        ),
        (t.onfocus = function () {
          t.style.setProperty("box-shadow", "0 0 0 0px rgba(24, 119, 242, 1)");
        }),
        (t.onclick = function () {
          t.style.setProperty("box-shadow", "0 0 0 0px rgba(24, 119, 242, 1)");
        }));
    }
    function w(e) {
      var t = e.actionType,
        n = e.fillValue,
        r = e.inputRole,
        o = e.label,
        a = e.surface,
        i = a;
      (o != null && o !== "" && (i += "[label=" + o + "]"),
        r != null && r !== "" && (i += "[inputRole=" + r + "]"));
      var l = t.split(",").map(function (e) {
          return e.trim();
        }),
        s = l.map(function (e) {
          var t = i + ">" + e;
          return (e === "fill" && n != null && (t += "?value=" + n), t);
        }),
        u = s.join(",");
      I(u);
    }
    function A() {
      for (var e of d)
        (e.style.setProperty("box-shadow", ""),
          e.style.setProperty("transition", ""),
          (e.onfocus = null),
          (e.onclick = null));
      d = [];
    }
    function F(e) {
      var t = e.replace(/<[^>]*>/g, "");
      return (
        (t = t.replace(/on\w+\s*=\s*[\"\'][^\"\']*[\"\']/gi, "")),
        (t = t.replace(/javascript:/gi, "")),
        (t = t.slice(0, 500)),
        t
      );
    }
    function O(e, t) {
      var n,
        r = e.value,
        o = e.ownerDocument.defaultView,
        a =
          o != null
            ? (n = Object.getOwnPropertyDescriptor(
                o.HTMLInputElement.prototype,
                "value",
              )) == null
              ? void 0
              : n.set
            : void 0;
      a == null || a.call(e, t);
      var i = new Event("input", { bubbles: !0 }),
        l = e._valueTracker;
      (l && l.setValue(r), e.dispatchEvent(i));
    }
    ((l.init = C),
      (l.runURLBorneActions = v),
      (l.runActions = R),
      (l.sanitizeUrlBorneActions = k),
      (l.runUntrustedActions = I),
      (l.parseSurfaceString = D),
      (l.clearPendingDeeplinkPrompt = o(
        "MAIBADeeplinkPromptStore",
      ).clearPendingDeeplinkPrompt),
      (l.getAndClearPendingDeeplinkPrompt = o(
        "MAIBADeeplinkPromptStore",
      ).getAndClearPendingDeeplinkPrompt),
      (l.testOnlyEnableAllSurfaces = x),
      (l.runActionFromAttributes = w),
      (l.clearAllHighlights = A));
  },
  98,
);
