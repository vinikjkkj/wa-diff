__d(
  "WAWebFormatNotificationTemplateModalText",
  [
    "fbt",
    "WAWebABPropsInternalNumber",
    "WAWebDisplayedNameIsBizName",
    "WAWebFrontendMsgGetters",
    "WAWebGetBusinessNameFromMsg",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebOrderGatingUtils",
    "WAWebSupportChatStrings",
    "WAWebWid",
    "WAWebWidToFormattedNameOrNumber",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.id,
        n = e.subtype;
      switch (n) {
        case "non_verified_transition":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "unverified_transition":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "verified_transition":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "verified_low_unknown":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "verified_high":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "verified_initial_unknown":
          return s._(/*BTDS*/ "", [
            s._param(
              "businessName",
              o("WAWebMsgModelUtils").getMsgDisplayName(e),
            ),
          ]);
        case "verified_initial_low":
          return s._(/*BTDS*/ "");
        case "verified_initial_high":
          return s._(/*BTDS*/ "");
        case "verified_transition_any_to_none":
          return s._(/*BTDS*/ "");
        case "verified_transition_any_to_high":
          return s._(/*BTDS*/ "");
        case "verified_transition_high_to_low":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "verified_transition_high_to_unknown":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "verified_transition_unknown_to_low":
          return s._(/*BTDS*/ "");
        case "verified_transition_low_to_unknown":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "verified_transition_none_to_low":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "verified_transition_none_to_unknown":
          return s._(/*BTDS*/ "", [
            s._param(
              "businessName",
              o("WAWebMsgModelUtils").getMsgDisplayName(e),
            ),
          ]);
        case "biz_verified_transition_top_to_bottom":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "biz_verified_transition_bottom_to_top":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "biz_intro_top": {
          var a = r("WAWebGetBusinessNameFromMsg")(e),
            i = r("WAWebWid").isOfficialBizAccount(t.remote);
          return r("WAWebDisplayedNameIsBizName")(t.remote, a)
            ? i
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "", [s._param("businessName", a)])
            : i
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "", [s._param("businessName", a)]);
        }
        case "biz_intro_bottom":
          return s._(/*BTDS*/ "", [
            s._param(
              "businessName",
              r("WAWebWidToFormattedNameOrNumber")(t.remote),
            ),
          ]);
        case "biz_name_change":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "biz_move_to_consumer_app":
          return s._(/*BTDS*/ "");
        case "biz_two_tier_migration_top": {
          var l = r("WAWebGetBusinessNameFromMsg")(e);
          return r("WAWebDisplayedNameIsBizName")(t.remote, l)
            ? s._(/*BTDS*/ "", [s._param("businessName", l)])
            : s._(/*BTDS*/ "", [s._param("businessName", l)]);
        }
        case "biz_two_tier_migration_bottom":
          return s._(/*BTDS*/ "", [
            s._param(
              "businessName",
              r("WAWebWidToFormattedNameOrNumber")(t.remote),
            ),
          ]);
        case "blue_msg_bsp_fb_to_bsp_premise":
        case "blue_msg_bsp_fb_unverified_to_bsp_premise_verified":
        case "blue_msg_bsp_fb_verified_to_bsp_premise_unverified":
        case "blue_msg_bsp_premise_unverified":
        case "blue_msg_bsp_premise_verified":
        case "blue_msg_consumer_to_bsp_premise_unverified":
        case "blue_msg_self_fb_to_bsp_premise":
        case "blue_msg_self_fb_unverified_to_bsp_premise_verified":
        case "blue_msg_self_fb_verified_to_bsp_premise_unverified":
        case "blue_msg_self_premise_to_bsp_premise":
        case "blue_msg_unverified_to_bsp_premise_verified":
        case "blue_msg_verified_to_bsp_premise_unverified":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "blue_msg_consumer_to_self_premise_unverified":
          return s._(/*BTDS*/ "");
        case "blue_msg_bsp_fb_to_self_fb":
        case "blue_msg_bsp_fb_unverified":
        case "blue_msg_bsp_fb_unverified_to_self_fb_verified":
        case "blue_msg_bsp_fb_verified":
        case "blue_msg_bsp_fb_verified_to_self_fb_unverified":
        case "blue_msg_consumer_to_bsp_fb_unverified":
        case "blue_msg_consumer_to_self_fb_unverified":
        case "blue_msg_self_fb_unverified":
        case "blue_msg_to_bsp_fb":
        case "blue_msg_to_self_fb":
        case "blue_msg_unverified_to_bsp_fb_verified":
        case "blue_msg_unverified_to_self_fb_verified":
        case "blue_msg_verified_to_bsp_fb_unverified":
        case "blue_msg_verified_to_self_fb_unverified":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "blue_msg_self_fb_verified": {
          var c = o("WAWebABPropsInternalNumber").getIsInternalNumber(
              o("WAWebFrontendMsgGetters").getChat(e).id.user,
            ),
            p = r("WAWebGetBusinessNameFromMsg")(e);
          return c
            ? s._(/*BTDS*/ "", [s._param("businessName", p)])
            : s._(/*BTDS*/ "", [s._param("businessName", p)]);
        }
        case "blue_msg_self_premise_unverified":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "blue_msg_self_premise_verified": {
          var _ = r("WAWebGetBusinessNameFromMsg")(e);
          return r("WAWebDisplayedNameIsBizName")(t.remote, _)
            ? s._(/*BTDS*/ "", [s._param("businessName", _)])
            : s._(/*BTDS*/ "", [s._param("businessName", _)]);
        }
        case "blue_msg_bsp_fb_verified_to_self_premise_unverified":
        case "blue_msg_bsp_premise_verified_to_self_premise_unverified":
        case "blue_msg_self_fb_verified_to_self_premise_unverified":
        case "blue_msg_verified_to_unverified":
          return s._(/*BTDS*/ "", [
            s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
          ]);
        case "blue_msg_bsp_fb_unverified_to_self_premise_verified":
        case "blue_msg_bsp_premise_unverified_to_self_premise_verified":
        case "blue_msg_self_fb_unverified_to_self_premise_verified":
        case "blue_msg_unverified_to_verified": {
          var f = r("WAWebGetBusinessNameFromMsg")(e);
          return r("WAWebDisplayedNameIsBizName")(t.remote, f)
            ? s._(/*BTDS*/ "", [s._param("businessName", f)])
            : s._(/*BTDS*/ "", [s._param("businessName", f)]);
        }
        case "is_capi_hosted_group":
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx("div", {
                className: "x1603h9y x1w7chpp",
                children: s._(/*BTDS*/ ""),
              }),
              u.jsx("br", {}),
              s._(/*BTDS*/ ""),
            ],
          });
        case "support_system_message":
          return d(
            o("WAWebMsgGetters").getIsIAS(e),
            o("WAWebMsgGetters").getIsCAPISupport(e) ||
              t.remote.isSupportAgentBot(),
          );
        case "biz_privacy_mode_init_fb":
        case "biz_privacy_mode_to_fb":
          return d(
            o("WAWebMsgGetters").getIsIAS(e),
            o("WAWebMsgGetters").getIsCAPISupport(e),
          );
        case "biz_privacy_mode_init_bsp":
        case "biz_privacy_mode_to_bsp":
          return m();
        case "order_ephemeral_exemption":
          return o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        default:
          return null;
      }
    }
    function d(e, t) {
      return (
        e === void 0 && (e = !1),
        t === void 0 && (t = !1),
        e
          ? u.jsxs(u.Fragment, {
              children: [
                s._(/*BTDS*/ ""),
                u.jsx("br", {}),
                u.jsx("br", {}),
                s._(/*BTDS*/ ""),
                u.jsx("br", {}),
                u.jsx("br", {}),
                s._(/*BTDS*/ ""),
              ],
            })
          : t
            ? u.jsxs(u.Fragment, {
                children: [
                  o("WAWebSupportChatStrings").SupportChatSecurityModalText(),
                  u.jsx("br", {}),
                  u.jsx("br", {}),
                  o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
                ],
              })
            : m()
      );
    }
    function m() {
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            className: "x1603h9y x1w7chpp",
            children: s._(/*BTDS*/ ""),
          }),
          u.jsx("br", {}),
          s._(/*BTDS*/ ""),
        ],
      });
    }
    function p() {
      return u.jsxs(u.Fragment, {
        children: [
          s._(/*BTDS*/ ""),
          u.jsx("br", {}),
          u.jsx("br", {}),
          s._(/*BTDS*/ ""),
        ],
      });
    }
    function _(e) {
      e === void 0 && (e = !1);
      var t = s._(/*BTDS*/ ""),
        n = s._(/*BTDS*/ "");
      return u.jsxs(u.Fragment, {
        children: [
          t,
          u.jsx("br", {}),
          u.jsx("br", {}),
          n,
          e
            ? null
            : u.jsxs(u.Fragment, {
                children: [u.jsx("br", {}), u.jsx("br", {}), s._(/*BTDS*/ "")],
              }),
        ],
      });
    }
    function f() {
      return u.jsxs(u.Fragment, {
        children: [s._(/*BTDS*/ ""), u.jsx("br", {})],
      });
    }
    function g() {
      return u.jsxs(u.Fragment, {
        children: [
          s._(/*BTDS*/ ""),
          u.jsx("br", {}),
          u.jsx("br", {}),
          s._(/*BTDS*/ ""),
          u.jsx("br", {}),
          u.jsx("br", {}),
          s._(/*BTDS*/ ""),
        ],
      });
    }
    ((l.formatNotificationTemplateModalText = c),
      (l.formatFbModalText = d),
      (l.formatBspAndFbModalText = m),
      (l.formatWaChatSecurityModalText = p),
      (l.formatCoexSecurityModalText = _),
      (l.formatCoexSecurityModalTextLastParagraph = f),
      (l.formatCoexSecurityModalTextForYourBusiness = g));
  },
  226,
);
