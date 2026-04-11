__d(
  "WAWebFormatNotificationTemplateModalText",
  [
    "fbt",
    "WAWebABProps",
    "WAWebABPropsInternalNumber",
    "WAWebBizGatingUtils",
    "WAWebDisplayedNameIsBizName",
    "WAWebFrontendMsgGetters",
    "WAWebGetBusinessNameFromMsg",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebPrivacyGatingUtils",
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
          return s._(
            /*BTDS*/ "The business account for {businessName} has registered as a standard user account and may no longer belong to the business.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "unverified_transition":
          return s._(
            /*BTDS*/ "The business account you're chatting with may belong to {businessName}. WhatsApp hasn't verified their name yet.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "verified_transition":
          return s._(
            /*BTDS*/ "To help you connect with businesses, we have verified that the business account you're chatting with belongs to {businessName}.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "verified_low_unknown":
          return s._(
            /*BTDS*/ "The business account you're chatting with may belong to {businessName}. WhatsApp hasn't verified their name yet.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "verified_high":
          return s._(
            /*BTDS*/ "To help you connect with businesses, we have verified that the business account you're chatting with belongs to {businessName}.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "verified_initial_unknown":
          return s._(
            /*BTDS*/ "{businessName} may be a business account, but WhatsApp hasn't verified their name yet.",
            [s._param("businessName", e.displayName())],
          );
        case "verified_initial_low":
          return s._(
            /*BTDS*/ 'WhatsApp has made changes to the business account types. "Confirmed business" will now be labeled as "Business account".',
          );
        case "verified_initial_high":
          return s._(
            /*BTDS*/ 'WhatsApp has made changes to the business account types. "Verified business" will now be labeled as "Official business account".',
          );
        case "verified_transition_any_to_none":
          return s._(
            /*BTDS*/ "This account was previously a business account and has now registered as a standard account. It may no longer belong to the business.",
          );
        case "verified_transition_any_to_high":
          return s._(
            /*BTDS*/ 'WhatsApp has made changes to the business account types. "Verified business" will now be labeled as "Official business account".',
          );
        case "verified_transition_high_to_low":
          return s._(
            /*BTDS*/ 'WhatsApp is no longer able to verify that this is the account for "{businessName}".',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "verified_transition_high_to_unknown":
          return s._(
            /*BTDS*/ 'WhatsApp is no longer able to verify that this is the account for "{businessName}".',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "verified_transition_unknown_to_low":
          return s._(
            /*BTDS*/ 'WhatsApp has made changes to the business account types. This "Confirmed business" will now be labeled as "Business account".',
          );
        case "verified_transition_low_to_unknown":
          return s._(
            /*BTDS*/ 'WhatsApp is no longer able to confirm that this is the account for "{businessName}".',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "verified_transition_none_to_low":
          return s._(
            /*BTDS*/ 'This account has registered as a business account and WhatsApp has confirmed that this is the account for "{businessName}".',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "verified_transition_none_to_unknown":
          return s._(
            /*BTDS*/ "{businessName} registered as a business account, but WhatsApp hasn't verified their name yet.",
            [s._param("businessName", e.displayName())],
          );
        case "biz_verified_transition_top_to_bottom":
          return s._(
            /*BTDS*/ 'WhatsApp is no longer able to verify that this is the official business account of "{businessName}".',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "biz_verified_transition_bottom_to_top":
          return s._(
            /*BTDS*/ 'WhatsApp has verified that this is the official business account of "{businessName}".',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "biz_intro_top": {
          var a = r("WAWebGetBusinessNameFromMsg")(e),
            i = r("WAWebWid").isOfficialBizAccount(t.remote);
          return r("WAWebDisplayedNameIsBizName")(t.remote, a)
            ? i
              ? s._(
                  /*BTDS*/ 'This is the official business account of "WhatsApp".',
                )
              : s._(
                  /*BTDS*/ 'WhatsApp has verified that this is the official business account of "{businessName}".',
                  [s._param("businessName", a)],
                )
            : i
              ? s._(
                  /*BTDS*/ 'This is the official business account of "WhatsApp". This account is saved with a different name in your address book.',
                )
              : s._(
                  /*BTDS*/ 'WhatsApp has verified that this is the official business account of "{businessName}". This account is saved with a different name in your address book.',
                  [s._param("businessName", a)],
                );
        }
        case "biz_intro_bottom":
          return s._(
            /*BTDS*/ '"{businessName}" registered as a business account, but WhatsApp hasn\u2019t verified their name yet.',
            [
              s._param(
                "businessName",
                r("WAWebWidToFormattedNameOrNumber")(t.remote),
              ),
            ],
          );
        case "biz_name_change":
          return s._(
            /*BTDS*/ 'WhatsApp has verified that this official business account changed its name and now uses the name "{businessName}".',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "biz_move_to_consumer_app":
          return s._(
            /*BTDS*/ "This account was previously a business account but has now registered as a standard account and may no longer belong to the business.",
          );
        case "biz_two_tier_migration_top": {
          var l = r("WAWebGetBusinessNameFromMsg")(e);
          return r("WAWebDisplayedNameIsBizName")(t.remote, l)
            ? s._(
                /*BTDS*/ 'WhatsApp has verified that this is the official business account of "{businessName}".',
                [s._param("businessName", l)],
              )
            : s._(
                /*BTDS*/ 'WhatsApp has verified that this is the official business account of "{businessName}". This account is saved with a different name in your address book.',
                [s._param("businessName", l)],
              );
        }
        case "biz_two_tier_migration_bottom":
          return s._(
            /*BTDS*/ '"{businessName}" registered as a business account, but WhatsApp hasn\u2019t verified their name yet.',
            [
              s._param(
                "businessName",
                r("WAWebWidToFormattedNameOrNumber")(t.remote),
              ),
            ],
          );
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
          return s._(
            /*BTDS*/ "WhatsApp secures messages while they're being delivered to and from the companies that store and manage this chat for {businessName}. Contact {businessName} for more information on their privacy practices.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "blue_msg_consumer_to_self_premise_unverified":
          return s._(/*BTDS*/ "This chat is with a business account.");
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
          return s._(
            /*BTDS*/ "WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}. Contact {businessName} for more information on their privacy practices.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "blue_msg_self_fb_verified": {
          var c = o("WAWebABPropsInternalNumber").getIsInternalNumber(
              o("WAWebFrontendMsgGetters").getChat(e).id.user,
            ),
            p = r("WAWebGetBusinessNameFromMsg")(e);
          return c
            ? s._(
                /*BTDS*/ "WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}.",
                [s._param("businessName", p)],
              )
            : s._(
                /*BTDS*/ "WhatsApp secures messages while they're being delivered to and from Facebook, where this chat is stored and managed for {businessName}. Contact {businessName} for more information on their privacy practices.",
                [s._param("businessName", p)],
              );
        }
        case "blue_msg_self_premise_unverified":
          return s._(
            /*BTDS*/ "{businessName} is registered as a business account.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
        case "blue_msg_self_premise_verified": {
          var _ = r("WAWebGetBusinessNameFromMsg")(e);
          return r("WAWebDisplayedNameIsBizName")(t.remote, _)
            ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
              ? s._(/*BTDS*/ "{businessName} is a verified account.", [
                  s._param("businessName", _),
                ])
              : s._(
                  /*BTDS*/ "{businessName} is registered as an official business account.",
                  [s._param("businessName", _)],
                )
            : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
              ? s._(
                  /*BTDS*/ "{businessName} is a verified account. It's saved as a different name in your contacts.",
                  [s._param("businessName", _)],
                )
              : s._(
                  /*BTDS*/ "{businessName} is registered as an official business account. The business is saved as a different name in your contacts.",
                  [s._param("businessName", _)],
                );
        }
        case "blue_msg_bsp_fb_verified_to_self_premise_unverified":
        case "blue_msg_bsp_premise_verified_to_self_premise_unverified":
        case "blue_msg_self_fb_verified_to_self_premise_unverified":
        case "blue_msg_verified_to_unverified":
          return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
            ? s._(/*BTDS*/ "{businessName} is no longer a verified account.", [
                s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e)),
              ])
            : s._(
                /*BTDS*/ "{businessName} is now registered as a business account, instead of an official business account.",
                [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
              );
        case "blue_msg_bsp_fb_unverified_to_self_premise_verified":
        case "blue_msg_bsp_premise_unverified_to_self_premise_verified":
        case "blue_msg_self_fb_unverified_to_self_premise_verified":
        case "blue_msg_unverified_to_verified": {
          var f = r("WAWebGetBusinessNameFromMsg")(e);
          return r("WAWebDisplayedNameIsBizName")(t.remote, f)
            ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
              ? s._(
                  /*BTDS*/ "This chat is with{businessName}'s verified account.",
                  [s._param("businessName", f)],
                )
              : s._(
                  /*BTDS*/ "This chat is with the official business account of {businessName}.",
                  [s._param("businessName", f)],
                )
            : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
              ? s._(
                  /*BTDS*/ "This chat is with {businessName}'s verified account. The account is saved as a different name in your contacts.",
                  [s._param("businessName", f)],
                )
              : s._(
                  /*BTDS*/ "This chat is with the official business account of {businessName}. The business is saved as a different name in your contacts.",
                  [s._param("businessName", f)],
                );
        }
        case "is_capi_hosted_group":
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx("div", {
                className: "x1603h9y x1w7chpp",
                children: s._(
                  /*BTDS*/ "WhatsApp secures your messages with the business and other members in this group.",
                ),
              }),
              u.jsx("br", {}),
              s._(
                /*BTDS*/ "You are always in control of the conversation. You can stop chatting with this business or block them at any time.",
              ),
            ],
          });
        case "support_system_message":
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
          return o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(
                /*BTDS*/ "Charges and payments will not disappear from this chat.",
              )
            : s._(
                /*BTDS*/ "Orders and payments will not disappear from this chat.",
              );
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
                s._(/*BTDS*/ "This is the official chat of WhatsApp Surveys."),
                u.jsx("br", {}),
                u.jsx("br", {}),
                s._(/*BTDS*/ "Taking surveys is optional."),
                u.jsx("br", {}),
                u.jsx("br", {}),
                s._(
                  /*BTDS*/ "If you choose to participate, your responses will be kept private. To learn more about how we use and protect your survey responses, click Learn More.",
                ),
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
      return o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()
        ? u.jsxs(u.Fragment, {
            children: [
              u.jsx("div", {
                className: "x1603h9y x1w7chpp",
                children: s._(
                  /*BTDS*/ "WhatsApp secures your messages and calls with this business.",
                ),
              }),
              u.jsx("br", {}),
              s._(
                /*BTDS*/ "You are always in control of the conversation. You can stop chatting with this business or block them at any time.",
              ),
            ],
          })
        : u.jsxs(u.Fragment, {
            children: [
              s._(
                /*BTDS*/ "You are always in control of the conversation. You can stop chatting with this business or block them at any time.",
              ),
              u.jsx("br", {}),
              u.jsx("br", {}),
              s._(
                /*BTDS*/ "WhatsApp secures your messages and calls with this business.",
              ),
              u.jsx("br", {}),
              u.jsx("br", {}),
              s._(
                /*BTDS*/ "For details about how this chat is secured, click Learn more.",
              ),
            ],
          });
    }
    function p() {
      return u.jsxs(u.Fragment, {
        children: [
          s._(
            /*BTDS*/ "This is a secure, official chat from WhatsApp. We use it to share tips, make announcements and let you know about new features.",
          ),
          u.jsx("br", {}),
          u.jsx("br", {}),
          s._(/*BTDS*/ "We'll never ask for your personal information."),
        ],
      });
    }
    function _(e) {
      e === void 0 && (e = !1);
      var t = s._(
          /*BTDS*/ "This business has chosen to use multiple tools to chat with its customers.",
        ),
        n = s._(
          /*BTDS*/ "Chats between only you and this business are managed by a secure service from Meta.",
        ),
        r = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
      return r
        ? u.jsxs(u.Fragment, {
            children: [
              t,
              u.jsx("br", {}),
              u.jsx("br", {}),
              n,
              e
                ? null
                : u.jsxs(u.Fragment, {
                    children: [
                      u.jsx("br", {}),
                      u.jsx("br", {}),
                      s._(
                        /*BTDS*/ "For group chats and status updates, this business is using the WhatsApp Business app. These communications remain end-to-end encrypted.",
                      ),
                    ],
                  }),
            ],
          })
        : u.jsxs(u.Fragment, {
            children: [
              t,
              u.jsx("br", {}),
              u.jsx("br", {}),
              n,
              u.jsx("br", {}),
              u.jsx("br", {}),
              s._(
                /*BTDS*/ "For group chats, calls, and status updates, this business is using the WhatsApp Business app. These communications remain end-to-end encrypted.",
              ),
            ],
          });
    }
    function f() {
      return u.jsxs(u.Fragment, {
        children: [
          s._(
            /*BTDS*/ "You are always in control of the conversation. You can stop chatting with this business or block them at any time.",
          ),
          u.jsx("br", {}),
        ],
      });
    }
    function g() {
      var e = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
      return u.jsxs(u.Fragment, {
        children: [
          s._(
            /*BTDS*/ "Your business has chosen to use multiple tools to chat with your customers.",
          ),
          u.jsx("br", {}),
          u.jsx("br", {}),
          e
            ? s._(
                /*BTDS*/ "Your business uses a secure service from Meta to manage messages and calls in this and other 1-1 chats.",
              )
            : s._(
                /*BTDS*/ "Chats between only your business and one other person are managed by a secure service from Meta.",
              ),
          u.jsx("br", {}),
          u.jsx("br", {}),
          e
            ? s._(
                /*BTDS*/ "For group chats and status updates, your business is using the WhatsApp Business app. These communications remain end-to-end encrypted.",
              )
            : s._(
                /*BTDS*/ "For group chats, calls, and status updates, your business is using the WhatsApp Business app. These communications remain end-to-end encrypted.",
              ),
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
