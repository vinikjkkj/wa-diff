__d(
  "MAIBAActionabilityManager",
  [
    "ALChannel",
    "AdsALEAUtils",
    "AdsExperimentsToolbarTestButtonModalAction",
    "AdsHelpTrayIPChatUILogger",
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
    "justknobx",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [],
      u = !1,
      c = [],
      d = !1,
      m = new Set([
        (e = o("MAIBAActionabilityConstants")).ACTION_HIGHLIGHT,
        e.ACTION_CLICK,
        e.ACTION_OPEN,
      ]),
      p = new Set([
        e.SURFACE_MAIBA_CHAT,
        e.SURFACE_AB_TEST_MODAL,
        e.SURFACE_AM_AB_TEST_TOOLBAR_BUTTON,
        e.SURFACE_AM_OPEN_CREATE_MODAL,
      ]),
      _ = new Set([
        "prompt_text",
        "prompt_id",
        "recommendation_hash",
        "hide_user_message",
        "dl_token",
      ]),
      f = new Set(["prompt_text", "hide_user_message"]);
    function g(e) {
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
      for (var a of o) if (!h(a)) return !1;
      return !0;
    }
    function h(e) {
      if (r("isStringNullOrEmpty")(e)) return !1;
      var t = e.split(">"),
        n = t[0],
        o = t[1];
      if (r("isStringNullOrEmpty")(n) || r("isStringNullOrEmpty")(o)) return !1;
      var a = I(n),
        i = a.surface;
      if (!p.has(i)) return !1;
      var l = o.split("?"),
        s = l[0];
      return !!m.has(s);
    }
    function y() {
      d ||
        ((d = !0),
        (u = !1),
        C(),
        r("ALChannel").addListener("al_surface_mutation_event", function (e) {
          var t = e.event,
            n = e.surface;
          switch (t) {
            case "mount_component":
              b(n);
              break;
            case "unmount_component":
              break;
          }
        }));
    }
    function C() {
      var e = new URLSearchParams(window.location.search),
        t = e.get("maiba_actions");
      if (!r("isStringNullOrEmpty")(t)) {
        if (!g(t)) {
          (r("FBLogger")("maiba_actionability").warn(
            "Invalid, unsupported, or potentially malicious maiba_actions parameter detected",
          ),
            o("MAIBAActionabilityURLUtils").removeMAIBAActionsFromURL());
          return;
        }
        var n = L(t);
        (r("isStringNullOrEmpty")(n) || v(n),
          o("MAIBAActionabilityURLUtils").removeMAIBAActionsFromURL());
      }
    }
    function b(e) {
      k(e);
    }
    function v(e, t, n) {
      var r = e == null ? void 0 : e.split(",");
      if ((u ? (s = r) : (s = r.length > 0 ? [r[0]] : []), t != null)) {
        var o = new URL(window.location.href);
        (o.searchParams.set("bot_response_id", t),
          window.history.replaceState({}, "", o));
      }
      k(void 0, n);
    }
    function S(e, t) {
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
    function R(e) {
      return S(e, _);
    }
    function L(e) {
      return S(e, f);
    }
    function E(e, t) {
      var n = R(e);
      r("isStringNullOrEmpty")(n) || v(n, t);
    }
    function k(e, t) {
      var n, a;
      if (s.length !== 0) {
        var l = (n = s) == null ? void 0 : n.at(0),
          u = (a = l == null ? void 0 : l.split(">")) != null ? a : ["", ""],
          c = u[0],
          d = u[1],
          m = I(c),
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
          (o("AdsHelpTrayIPChatUILogger").logAdsAIEntrypointClick({
            act: p.act,
            channel: p.channel,
            entrypoint: "DEEPLINK_AM",
            entrypoint_click_id: C,
            prompt_id: p.prompt_id,
            recommendationHashString: p.recommendation_hash,
            surface: L,
            tip_name: p.tip_name,
          }),
            o("MAIBAChatAppUIActions").openMAIBAChatThread(
              { showConsentDisclaimer: !y },
              void 0,
              "DEEPLINK_AM",
              L,
            ),
            s.shift(),
            k());
          return;
        }
        if (
          _ === o("MAIBAActionabilityConstants").SURFACE_AB_TEST_MODAL &&
          d === o("MAIBAActionabilityConstants").ACTION_OPEN
        ) {
          (r("AdsExperimentsToolbarTestButtonModalAction").dispatch(
            { showModal: !0, source: "MAIBA" },
            {
              line: "432",
              module: "MAIBAActionabilityManager.js",
              moduleID: i.id,
            },
          ),
            s.shift(),
            k(void 0, t));
          return;
        }
        if (!(e != null && e !== _)) {
          var E = $(_, t),
            T =
              E == null
                ? void 0
                : E.map(function (e) {
                    return P(e, p);
                  }).find(Boolean);
          if (T != null) {
            var D = d.split("?"),
              M = D[0];
            switch (
              (T == null || T.scrollIntoView == null || T.scrollIntoView(), M)
            ) {
              case o("MAIBAActionabilityConstants").ACTION_HIGHLIGHT:
                N(T);
                break;
              case o("MAIBAActionabilityConstants").ACTION_CLICK:
                T == null || T.click();
                break;
              case o("MAIBAActionabilityConstants").ACTION_SCROLL:
                t === !0 &&
                  (T == null ||
                    T.scrollIntoView == null ||
                    T.scrollIntoView({ behavior: "smooth", block: "center" }));
                break;
              case o("MAIBAActionabilityConstants").ACTION_FILL: {
                if (!x(_, t)) break;
                var w = d.split("?"),
                  O = w[1];
                if (O != null && T instanceof HTMLInputElement) {
                  var B = O.startsWith("value=") ? O.slice(6) : O,
                    W = A(B);
                  F(T, W);
                }
                break;
              }
              default:
                break;
            }
            (s.shift(), k(void 0, t));
          }
        }
      }
    }
    function I(e) {
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
    function T() {
      u = !0;
    }
    function D() {
      ((d = !1), (u = !1), (c = []), (s = []));
    }
    function x(e, t) {
      return (
        t === !0 &&
        o("MAIBAActionabilityConstants").FILL_ELIGIBLE_SURFACES.has(e)
      );
    }
    function $(e, t) {
      var n,
        r = o("AdsALEAUtils").buildSurfaceMap();
      return !u && t !== !0 && !p.has(e) ? [] : (n = r.get(e)) != null ? n : [];
    }
    function P(e, t) {
      if (Object.keys(t).length === 0) return e;
      var n = e.querySelectorAll('[role="button"], input');
      return Array.from(n).find(function (e) {
        var n = o("MAIBAVisualContextSurfaceData").extractInputElementData(e);
        if (
          (t.label == null || n.label === t.label) &&
          (t.inputRole == null ||
            (r("justknobx")._("3465") ? n.role : n.inputRole) === t.inputRole)
        )
          return !0;
      });
    }
    function N(e) {
      var t = e;
      (e instanceof HTMLInputElement &&
        e.parentElement instanceof HTMLElement &&
        (t = e.parentElement),
        c.push(t),
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
    function M(e) {
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
      v(u, null, !0);
    }
    function w() {
      for (var e of c)
        (e.style.setProperty("box-shadow", ""),
          e.style.setProperty("transition", ""),
          (e.onfocus = null),
          (e.onclick = null));
      c = [];
    }
    function A(e) {
      var t = e.replace(/<[^>]*>/g, "");
      return (
        (t = t.replace(/on\w+\s*=\s*[\"\'][^\"\']*[\"\']/gi, "")),
        (t = t.replace(/javascript:/gi, "")),
        (t = t.slice(0, 500)),
        t
      );
    }
    function F(e, t) {
      var n,
        r = e.value,
        o =
          (n = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value",
          )) == null
            ? void 0
            : n.set;
      o == null || o.call(e, t);
      var a = new Event("input", { bubbles: !0 }),
        i = e._valueTracker;
      (i && i.setValue(r), e.dispatchEvent(a));
    }
    ((l.init = y),
      (l.componentMouted = b),
      (l.runActions = v),
      (l.sanitizeUntrustedActions = R),
      (l.sanitizeUrlBorneActions = L),
      (l.runUntrustedActions = E),
      (l.parseSurfaceString = I),
      (l.clearPendingDeeplinkPrompt = o(
        "MAIBADeeplinkPromptStore",
      ).clearPendingDeeplinkPrompt),
      (l.getAndClearPendingDeeplinkPrompt = o(
        "MAIBADeeplinkPromptStore",
      ).getAndClearPendingDeeplinkPrompt),
      (l.getPendingDeeplinkPrompt = o(
        "MAIBADeeplinkPromptStore",
      ).getPendingDeeplinkPrompt),
      (l.testOnlyEnableAllSurfaces = T),
      (l.testOnlyResetState = D),
      (l.isServerDrivenFillAllowed = x),
      (l.runActionFromAttributes = M),
      (l.clearAllHighlights = w));
  },
  98,
);
