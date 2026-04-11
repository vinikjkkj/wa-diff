__d(
  "WAWebFormatNotificationTemplateText",
  [
    "fbt",
    "WANullthrows",
    "WAWebABPropsInternalNumber",
    "WAWebBizBroadcastFormatStatusText",
    "WAWebBizGatingUtils",
    "WAWebBotGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatAssignmentUtils",
    "WAWebClock",
    "WAWebCommonMsgTemplateParamsUtils",
    "WAWebContactCollection",
    "WAWebCurrencyUtils",
    "WAWebDisplayedNameIsBizName",
    "WAWebFbtAppName",
    "WAWebFormatChangeLidTemplateText",
    "WAWebFormatChangeUsernameTemplateText",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatParticipantNames",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetBusinessNameFromMsg",
    "WAWebHostedGroupUtils",
    "WAWebLabelConstants",
    "WAWebLimitSharingUIUtils",
    "WAWebListsGatingUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebSupportChatStrings",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFormat",
    "WAWebWidToFormattedNameOrNumber",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r = { text: u(e, t, n) },
        o = K(e);
      return (o != null && (r.ctaText = o), r);
    }
    function u(e, t, n) {
      var a = e.templateParams,
        i = e.subtype;
      return i === "non_verified_transition"
        ? s._(
            /*BTDS*/ "The business account you were chatting with is now a standard account. Click for more info.",
          )
        : i === "unverified_transition"
          ? s._(
              /*BTDS*/ "The business account you're chatting with is now unverified. Click for more info.",
            )
          : i === "verified_transition"
            ? s._(
                /*BTDS*/ "The business account you're chatting with is now verified. Click for more info.",
              )
            : i === "verified_low_unknown"
              ? s._(
                  /*BTDS*/ "This chat is with an unverified business account. Click for more info.",
                )
              : i === "verified_high"
                ? s._(
                    /*BTDS*/ "This chat is with a verified business account. Click for more info.",
                  )
                : i === "verified_initial_unknown"
                  ? s._(
                      /*BTDS*/ "This chat may be with a business account. Click for more info.",
                    )
                  : i === "verified_initial_low"
                    ? s._(
                        /*BTDS*/ 'This chat is with the business account for "{businessName}". Click for more info.',
                        [
                          s._param(
                            "businessName",
                            r("WAWebGetBusinessNameFromMsg")(e),
                          ),
                        ],
                      )
                    : i === "verified_initial_high"
                      ? s._(
                          /*BTDS*/ 'This chat is with the verified business account for "{businessName}". Click for more info.',
                          [
                            s._param(
                              "businessName",
                              r("WAWebGetBusinessNameFromMsg")(e),
                            ),
                          ],
                        )
                      : i === "verified_transition_any_to_none"
                        ? s._(
                            /*BTDS*/ "This business account has now registered as a standard account. Click for more info.",
                          )
                        : i === "verified_transition_any_to_high"
                          ? s._(
                              /*BTDS*/ 'The business account you\'re chatting with is now verified as "{businessName}". Click for more info.',
                              [
                                s._param(
                                  "businessName",
                                  r("WAWebGetBusinessNameFromMsg")(e),
                                ),
                              ],
                            )
                          : i === "verified_transition_high_to_low"
                            ? s._(
                                /*BTDS*/ 'The business account you\'re chatting with is no longer verified as "{businessName}". Click for more info.',
                                [
                                  s._param(
                                    "businessName",
                                    r("WAWebGetBusinessNameFromMsg")(e),
                                  ),
                                ],
                              )
                            : i === "verified_transition_high_to_unknown"
                              ? s._(
                                  /*BTDS*/ 'The business account you\'re chatting with is no longer verified as "{businessName}". Click for more info.',
                                  [
                                    s._param(
                                      "businessName",
                                      r("WAWebGetBusinessNameFromMsg")(e),
                                    ),
                                  ],
                                )
                              : i === "verified_transition_unknown_to_low"
                                ? s._(
                                    /*BTDS*/ 'The business account you\'re chatting with belongs to "{businessName}".',
                                    [
                                      s._param(
                                        "businessName",
                                        r("WAWebGetBusinessNameFromMsg")(e),
                                      ),
                                    ],
                                  )
                                : i === "verified_transition_low_to_unknown"
                                  ? s._(
                                      /*BTDS*/ 'The business account you\'re chatting with is no longer confirmed as "{businessName}". Click for more info.',
                                      [
                                        s._param(
                                          "businessName",
                                          r("WAWebGetBusinessNameFromMsg")(e),
                                        ),
                                      ],
                                    )
                                  : i === "verified_transition_none_to_low"
                                    ? s._(
                                        /*BTDS*/ "This account has registered as a business account. Click for more info.",
                                      )
                                    : i ===
                                        "verified_transition_none_to_unknown"
                                      ? s._(
                                          /*BTDS*/ "This chat may be with a business account. Click for more info.",
                                        )
                                      : i === "change_number"
                                        ? c(e, a)
                                        : i === "sender_invite"
                                          ? d(e, a)
                                          : i === "receiver_invite"
                                            ? m(e)
                                            : i === "masked_thread_created"
                                              ? s._(
                                                  /*BTDS*/ "Your phone number is not shared in this chat. Businesses who have your number in their contacts will be able to see it. Click to learn more",
                                                )
                                              : i === "pnh_thread_promotion"
                                                ? s._(
                                                    /*BTDS*/ "Sending a message shares your phone number.",
                                                  )
                                                : i ===
                                                    "cag_masked_thread_created"
                                                  ? s._(
                                                      /*BTDS*/ "This chat has added privacy for your phone number. Click to learn more.",
                                                    )
                                                  : i ===
                                                      "payment_transaction_status_update_failed"
                                                    ? s._(
                                                        /*BTDS*/ "Your payment to {receiverName} {relativeTime} couldn't complete.",
                                                        [
                                                          s._param(
                                                            "receiverName",
                                                            r(
                                                              "WAWebWidToFormattedNameOrNumber",
                                                            )(a[0]),
                                                          ),
                                                          s._param(
                                                            "relativeTime",
                                                            o(
                                                              "WAWebClock",
                                                            ).Clock.paymentTimestampStr(
                                                              e.t,
                                                            ),
                                                          ),
                                                        ],
                                                      )
                                                    : i ===
                                                        "payment_transaction_status_update_refunded"
                                                      ? s._(
                                                          /*BTDS*/ "Your payment to {receiverName} was refunded {relativeTime}.",
                                                          [
                                                            s._param(
                                                              "receiverName",
                                                              r(
                                                                "WAWebWidToFormattedNameOrNumber",
                                                              )(a[0]),
                                                            ),
                                                            s._param(
                                                              "relativeTime",
                                                              o(
                                                                "WAWebClock",
                                                              ).Clock.paymentTimestampStr(
                                                                e.t,
                                                              ),
                                                            ),
                                                          ],
                                                        )
                                                      : i ===
                                                          "payment_transaction_status_update_refund_failed"
                                                        ? s._(
                                                            /*BTDS*/ "Your payment to {receiverName} {relativeTime} couldn't complete.",
                                                            [
                                                              s._param(
                                                                "receiverName",
                                                                r(
                                                                  "WAWebWidToFormattedNameOrNumber",
                                                                )(a[0]),
                                                              ),
                                                              s._param(
                                                                "relativeTime",
                                                                o(
                                                                  "WAWebClock",
                                                                ).Clock.paymentTimestampStr(
                                                                  e.t,
                                                                ),
                                                              ),
                                                            ],
                                                          )
                                                        : i ===
                                                            "payment_transaction_request_cancelled"
                                                          ? p(e, a)
                                                          : i ===
                                                              "payment_transaction_status_receiver_pending_setup"
                                                            ? _(a)
                                                            : i ===
                                                                "payment_action_request_declined"
                                                              ? f(e, a)
                                                              : i ===
                                                                  "payment_action_request_expired"
                                                                ? g(a)
                                                                : i ===
                                                                    "payment_invite_account_set_up"
                                                                  ? h(a)
                                                                  : i ===
                                                                      "biz_verified_transition_top_to_bottom"
                                                                    ? o(
                                                                        "WAWebMiscGatingUtils",
                                                                      ).isBlueStringsEnabled()
                                                                      ? s._(
                                                                          /*BTDS*/ "{businessName} is no longer a verified account. Click to learn more.",
                                                                          [
                                                                            s._param(
                                                                              "businessName",
                                                                              r(
                                                                                "WAWebGetBusinessNameFromMsg",
                                                                              )(
                                                                                e,
                                                                              ),
                                                                            ),
                                                                          ],
                                                                        )
                                                                      : s._(
                                                                          /*BTDS*/ 'This chat is no longer with the official business account of "{businessName}". Click for more info.',
                                                                          [
                                                                            s._param(
                                                                              "businessName",
                                                                              r(
                                                                                "WAWebGetBusinessNameFromMsg",
                                                                              )(
                                                                                e,
                                                                              ),
                                                                            ),
                                                                          ],
                                                                        )
                                                                    : i ===
                                                                        "biz_verified_transition_bottom_to_top"
                                                                      ? o(
                                                                          "WAWebMiscGatingUtils",
                                                                        ).isBlueStringsEnabled()
                                                                        ? s._(
                                                                            /*BTDS*/ "{businessName} is now a verified account. Click to learn more.",
                                                                            [
                                                                              s._param(
                                                                                "businessName",
                                                                                r(
                                                                                  "WAWebGetBusinessNameFromMsg",
                                                                                )(
                                                                                  e,
                                                                                ),
                                                                              ),
                                                                            ],
                                                                          )
                                                                        : s._(
                                                                            /*BTDS*/ 'This chat is now with the official business account of "{businessName}". Click for more info.',
                                                                            [
                                                                              s._param(
                                                                                "businessName",
                                                                                r(
                                                                                  "WAWebGetBusinessNameFromMsg",
                                                                                )(
                                                                                  e,
                                                                                ),
                                                                              ),
                                                                            ],
                                                                          )
                                                                      : i ===
                                                                          "biz_intro_top"
                                                                        ? b(e)
                                                                        : i ===
                                                                            "biz_intro_bottom"
                                                                          ? s._(
                                                                              /*BTDS*/ "This chat is with a business account. Click for more info.",
                                                                            )
                                                                          : i ===
                                                                              "biz_name_change"
                                                                            ? v(
                                                                                e,
                                                                              )
                                                                            : i ===
                                                                                "biz_move_to_consumer_app"
                                                                              ? s._(
                                                                                  /*BTDS*/ "This business account has now registered as a standard account. Click for more info.",
                                                                                )
                                                                              : i ===
                                                                                  "biz_two_tier_migration_top"
                                                                                ? o(
                                                                                    "WAWebMiscGatingUtils",
                                                                                  ).isBlueStringsEnabled()
                                                                                  ? s._(
                                                                                      /*BTDS*/ "This chat is with {businessName}'s verified account. Click for more info.",
                                                                                      [
                                                                                        s._param(
                                                                                          "businessName",
                                                                                          r(
                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                          )(
                                                                                            e,
                                                                                          ),
                                                                                        ),
                                                                                      ],
                                                                                    )
                                                                                  : s._(
                                                                                      /*BTDS*/ 'This chat is with the official business account of "{businessName}". Click for more info.',
                                                                                      [
                                                                                        s._param(
                                                                                          "businessName",
                                                                                          r(
                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                          )(
                                                                                            e,
                                                                                          ),
                                                                                        ),
                                                                                      ],
                                                                                    )
                                                                                : i ===
                                                                                    "biz_two_tier_migration_bottom"
                                                                                  ? s._(
                                                                                      /*BTDS*/ "This chat is with a business account. Click for more info.",
                                                                                    )
                                                                                  : i ===
                                                                                      "blue_msg_bsp_fb_to_bsp_premise"
                                                                                    ? s._(
                                                                                        /*BTDS*/ "{businessName} no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                        [
                                                                                          s._param(
                                                                                            "businessName",
                                                                                            r(
                                                                                              "WAWebGetBusinessNameFromMsg",
                                                                                            )(
                                                                                              e,
                                                                                            ),
                                                                                          ),
                                                                                        ],
                                                                                      )
                                                                                    : i ===
                                                                                        "blue_msg_bsp_fb_to_self_fb"
                                                                                      ? s._(
                                                                                          /*BTDS*/ "{businessName} now only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                          [
                                                                                            s._param(
                                                                                              "businessName",
                                                                                              r(
                                                                                                "WAWebGetBusinessNameFromMsg",
                                                                                              )(
                                                                                                e,
                                                                                              ),
                                                                                            ),
                                                                                          ],
                                                                                        )
                                                                                      : i ===
                                                                                          "blue_msg_bsp_fb_to_self_premise"
                                                                                        ? s._(
                                                                                            /*BTDS*/ "{businessName} no longer uses Facebook or other companies to manage its WhatsApp conversations.",
                                                                                            [
                                                                                              s._param(
                                                                                                "businessName",
                                                                                                r(
                                                                                                  "WAWebGetBusinessNameFromMsg",
                                                                                                )(
                                                                                                  e,
                                                                                                ),
                                                                                              ),
                                                                                            ],
                                                                                          )
                                                                                        : i ===
                                                                                            "blue_msg_bsp_fb_unverified"
                                                                                          ? s._(
                                                                                              /*BTDS*/ "This chat is with a business account that uses Facebook and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
                                                                                            )
                                                                                          : i ===
                                                                                              "blue_msg_bsp_fb_unverified_to_bsp_premise_verified"
                                                                                            ? y(
                                                                                                e,
                                                                                              )
                                                                                            : i ===
                                                                                                "blue_msg_bsp_fb_unverified_to_self_fb_verified"
                                                                                              ? C(
                                                                                                  e,
                                                                                                )
                                                                                              : i ===
                                                                                                  "blue_msg_bsp_fb_unverified_to_self_premise_verified"
                                                                                                ? o(
                                                                                                    "WAWebMiscGatingUtils",
                                                                                                  ).isBlueStringsEnabled()
                                                                                                  ? s._(
                                                                                                      /*BTDS*/ "{businessName} is now a verified account. This business no longer uses Meta or other companies to manage its WhatsApp conversations. Click to learn more.",
                                                                                                      [
                                                                                                        s._param(
                                                                                                          "businessName",
                                                                                                          r(
                                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                                          )(
                                                                                                            e,
                                                                                                          ),
                                                                                                        ),
                                                                                                      ],
                                                                                                    )
                                                                                                  : s._(
                                                                                                      /*BTDS*/ "{businessName} is now registered as an official business account. This business no longer uses Facebook or other companies to manage its WhatsApp conversations. Click to learn more.",
                                                                                                      [
                                                                                                        s._param(
                                                                                                          "businessName",
                                                                                                          r(
                                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                                          )(
                                                                                                            e,
                                                                                                          ),
                                                                                                        ),
                                                                                                      ],
                                                                                                    )
                                                                                                : i ===
                                                                                                    "blue_msg_bsp_fb_verified"
                                                                                                  ? S(
                                                                                                      e,
                                                                                                    )
                                                                                                  : i ===
                                                                                                      "blue_msg_bsp_fb_verified_to_bsp_premise_unverified"
                                                                                                    ? R(
                                                                                                        e,
                                                                                                      )
                                                                                                    : i ===
                                                                                                        "blue_msg_bsp_fb_verified_to_self_fb_unverified"
                                                                                                      ? L(
                                                                                                          e,
                                                                                                        )
                                                                                                      : i ===
                                                                                                          "blue_msg_bsp_fb_verified_to_self_premise_unverified"
                                                                                                        ? E(
                                                                                                            e,
                                                                                                          )
                                                                                                        : i ===
                                                                                                            "blue_msg_bsp_premise_to_self_premise"
                                                                                                          ? s._(
                                                                                                              /*BTDS*/ "{businessName} no longer uses other companies to manage its WhatsApp conversations.",
                                                                                                              [
                                                                                                                s._param(
                                                                                                                  "businessName",
                                                                                                                  r(
                                                                                                                    "WAWebGetBusinessNameFromMsg",
                                                                                                                  )(
                                                                                                                    e,
                                                                                                                  ),
                                                                                                                ),
                                                                                                              ],
                                                                                                            )
                                                                                                          : i ===
                                                                                                              "blue_msg_bsp_premise_unverified"
                                                                                                            ? s._(
                                                                                                                /*BTDS*/ "This chat is with a business account that uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
                                                                                                              )
                                                                                                            : i ===
                                                                                                                "blue_msg_bsp_premise_unverified_to_self_premise_verified"
                                                                                                              ? o(
                                                                                                                  "WAWebMiscGatingUtils",
                                                                                                                ).isBlueStringsEnabled()
                                                                                                                ? s._(
                                                                                                                    /*BTDS*/ "{businessName} is now a verified account and no longer uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
                                                                                                                    [
                                                                                                                      s._param(
                                                                                                                        "businessName",
                                                                                                                        r(
                                                                                                                          "WAWebGetBusinessNameFromMsg",
                                                                                                                        )(
                                                                                                                          e,
                                                                                                                        ),
                                                                                                                      ),
                                                                                                                    ],
                                                                                                                  )
                                                                                                                : s._(
                                                                                                                    /*BTDS*/ "{businessName} is now registered as an official business account. This business no longer uses other companies to manage its WhatsApp conversations. Click to learn more.",
                                                                                                                    [
                                                                                                                      s._param(
                                                                                                                        "businessName",
                                                                                                                        r(
                                                                                                                          "WAWebGetBusinessNameFromMsg",
                                                                                                                        )(
                                                                                                                          e,
                                                                                                                        ),
                                                                                                                      ),
                                                                                                                    ],
                                                                                                                  )
                                                                                                              : i ===
                                                                                                                  "blue_msg_bsp_premise_verified"
                                                                                                                ? k(
                                                                                                                    e,
                                                                                                                  )
                                                                                                                : i ===
                                                                                                                    "blue_msg_bsp_premise_verified_to_self_premise_unverified"
                                                                                                                  ? I(
                                                                                                                      e,
                                                                                                                    )
                                                                                                                  : i ===
                                                                                                                      "blue_msg_consumer_to_bsp_fb_unverified"
                                                                                                                    ? T(
                                                                                                                        e,
                                                                                                                      )
                                                                                                                    : i ===
                                                                                                                        "blue_msg_consumer_to_bsp_premise_unverified"
                                                                                                                      ? s._(
                                                                                                                          /*BTDS*/ "{businessName} is now registered as a business account that uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                          [
                                                                                                                            s._param(
                                                                                                                              "businessName",
                                                                                                                              r(
                                                                                                                                "WAWebGetBusinessNameFromMsg",
                                                                                                                              )(
                                                                                                                                e,
                                                                                                                              ),
                                                                                                                            ),
                                                                                                                          ],
                                                                                                                        )
                                                                                                                      : i ===
                                                                                                                          "blue_msg_consumer_to_self_fb_unverified"
                                                                                                                        ? s._(
                                                                                                                            /*BTDS*/ "{businessName} is now registered as a business account that uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                            [
                                                                                                                              s._param(
                                                                                                                                "businessName",
                                                                                                                                r(
                                                                                                                                  "WAWebGetBusinessNameFromMsg",
                                                                                                                                )(
                                                                                                                                  e,
                                                                                                                                ),
                                                                                                                              ),
                                                                                                                            ],
                                                                                                                          )
                                                                                                                        : i ===
                                                                                                                            "blue_msg_consumer_to_self_premise_unverified"
                                                                                                                          ? s._(
                                                                                                                              /*BTDS*/ "{businessName} is now registered as a business account. Click to learn more.",
                                                                                                                              [
                                                                                                                                s._param(
                                                                                                                                  "businessName",
                                                                                                                                  r(
                                                                                                                                    "WAWebGetBusinessNameFromMsg",
                                                                                                                                  )(
                                                                                                                                    e,
                                                                                                                                  ),
                                                                                                                                ),
                                                                                                                              ],
                                                                                                                            )
                                                                                                                          : i ===
                                                                                                                              "blue_msg_self_fb_to_bsp_premise"
                                                                                                                            ? s._(
                                                                                                                                /*BTDS*/ "{businessName} now uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                                [
                                                                                                                                  s._param(
                                                                                                                                    "businessName",
                                                                                                                                    r(
                                                                                                                                      "WAWebGetBusinessNameFromMsg",
                                                                                                                                    )(
                                                                                                                                      e,
                                                                                                                                    ),
                                                                                                                                  ),
                                                                                                                                ],
                                                                                                                              )
                                                                                                                            : i ===
                                                                                                                                "blue_msg_self_fb_to_self_premise"
                                                                                                                              ? s._(
                                                                                                                                  /*BTDS*/ "{businessName} no longer uses Facebook to manage its WhatsApp conversations.",
                                                                                                                                  [
                                                                                                                                    s._param(
                                                                                                                                      "businessName",
                                                                                                                                      r(
                                                                                                                                        "WAWebGetBusinessNameFromMsg",
                                                                                                                                      )(
                                                                                                                                        e,
                                                                                                                                      ),
                                                                                                                                    ),
                                                                                                                                  ],
                                                                                                                                )
                                                                                                                              : i ===
                                                                                                                                  "blue_msg_self_fb_unverified"
                                                                                                                                ? s._(
                                                                                                                                    /*BTDS*/ "This chat is with a business account that uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
                                                                                                                                  )
                                                                                                                                : i ===
                                                                                                                                    "blue_msg_self_fb_unverified_to_bsp_premise_verified"
                                                                                                                                  ? D(
                                                                                                                                      e,
                                                                                                                                    )
                                                                                                                                  : i ===
                                                                                                                                      "blue_msg_self_fb_unverified_to_self_premise_verified"
                                                                                                                                    ? x(
                                                                                                                                        e,
                                                                                                                                      )
                                                                                                                                    : i ===
                                                                                                                                        "blue_msg_self_fb_verified"
                                                                                                                                      ? $(
                                                                                                                                          e,
                                                                                                                                        )
                                                                                                                                      : i ===
                                                                                                                                          "blue_msg_self_fb_verified_to_bsp_premise_unverified"
                                                                                                                                        ? o(
                                                                                                                                            "WAWebMiscGatingUtils",
                                                                                                                                          ).isBlueStringsEnabled()
                                                                                                                                          ? s._(
                                                                                                                                              /*BTDS*/ "{businessName} is no longer a verified account. The account uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
                                                                                                                                              [
                                                                                                                                                s._param(
                                                                                                                                                  "businessName",
                                                                                                                                                  r(
                                                                                                                                                    "WAWebGetBusinessNameFromMsg",
                                                                                                                                                  )(
                                                                                                                                                    e,
                                                                                                                                                  ),
                                                                                                                                                ),
                                                                                                                                              ],
                                                                                                                                            )
                                                                                                                                          : s._(
                                                                                                                                              /*BTDS*/ "{businessName} is no longer an official business account. This business uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                                              [
                                                                                                                                                s._param(
                                                                                                                                                  "businessName",
                                                                                                                                                  r(
                                                                                                                                                    "WAWebGetBusinessNameFromMsg",
                                                                                                                                                  )(
                                                                                                                                                    e,
                                                                                                                                                  ),
                                                                                                                                                ),
                                                                                                                                              ],
                                                                                                                                            )
                                                                                                                                        : i ===
                                                                                                                                            "blue_msg_self_fb_verified_to_self_premise_unverified"
                                                                                                                                          ? o(
                                                                                                                                              "WAWebMiscGatingUtils",
                                                                                                                                            ).isBlueStringsEnabled()
                                                                                                                                            ? s._(
                                                                                                                                                /*BTDS*/ "{businessName} is no longer a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
                                                                                                                                                [
                                                                                                                                                  s._param(
                                                                                                                                                    "businessName",
                                                                                                                                                    r(
                                                                                                                                                      "WAWebGetBusinessNameFromMsg",
                                                                                                                                                    )(
                                                                                                                                                      e,
                                                                                                                                                    ),
                                                                                                                                                  ),
                                                                                                                                                ],
                                                                                                                                              )
                                                                                                                                            : s._(
                                                                                                                                                /*BTDS*/ "{businessName} is no longer an official business account and it no longer uses Facebook to manage its WhatsApp conversations. Click to learn more.",
                                                                                                                                                [
                                                                                                                                                  s._param(
                                                                                                                                                    "businessName",
                                                                                                                                                    r(
                                                                                                                                                      "WAWebGetBusinessNameFromMsg",
                                                                                                                                                    )(
                                                                                                                                                      e,
                                                                                                                                                    ),
                                                                                                                                                  ),
                                                                                                                                                ],
                                                                                                                                              )
                                                                                                                                          : i ===
                                                                                                                                              "blue_msg_self_premise_to_bsp_premise"
                                                                                                                                            ? s._(
                                                                                                                                                /*BTDS*/ "{businessName} now uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                                                [
                                                                                                                                                  s._param(
                                                                                                                                                    "businessName",
                                                                                                                                                    r(
                                                                                                                                                      "WAWebGetBusinessNameFromMsg",
                                                                                                                                                    )(
                                                                                                                                                      e,
                                                                                                                                                    ),
                                                                                                                                                  ),
                                                                                                                                                ],
                                                                                                                                              )
                                                                                                                                            : i ===
                                                                                                                                                "blue_msg_self_premise_unverified"
                                                                                                                                              ? s._(
                                                                                                                                                  /*BTDS*/ "This chat is with a business account. Click to learn more.",
                                                                                                                                                )
                                                                                                                                              : i ===
                                                                                                                                                  "blue_msg_self_premise_verified"
                                                                                                                                                ? o(
                                                                                                                                                    "WAWebMiscGatingUtils",
                                                                                                                                                  ).isBlueStringsEnabled()
                                                                                                                                                  ? s._(
                                                                                                                                                      /*BTDS*/ "This chat is with {businessName}'s verified account. Click to learn more.",
                                                                                                                                                      [
                                                                                                                                                        s._param(
                                                                                                                                                          "businessName",
                                                                                                                                                          r(
                                                                                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                                                                                          )(
                                                                                                                                                            e,
                                                                                                                                                          ),
                                                                                                                                                        ),
                                                                                                                                                      ],
                                                                                                                                                    )
                                                                                                                                                  : s._(
                                                                                                                                                      /*BTDS*/ "This chat is with the official business account of {businessName}. Click to learn more.",
                                                                                                                                                      [
                                                                                                                                                        s._param(
                                                                                                                                                          "businessName",
                                                                                                                                                          r(
                                                                                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                                                                                          )(
                                                                                                                                                            e,
                                                                                                                                                          ),
                                                                                                                                                        ),
                                                                                                                                                      ],
                                                                                                                                                    )
                                                                                                                                                : i ===
                                                                                                                                                    "blue_msg_to_bsp_fb"
                                                                                                                                                  ? s._(
                                                                                                                                                      /*BTDS*/ "{businessName} now uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                                                      [
                                                                                                                                                        s._param(
                                                                                                                                                          "businessName",
                                                                                                                                                          r(
                                                                                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                                                                                          )(
                                                                                                                                                            e,
                                                                                                                                                          ),
                                                                                                                                                        ),
                                                                                                                                                      ],
                                                                                                                                                    )
                                                                                                                                                  : i ===
                                                                                                                                                      "blue_msg_to_consumer"
                                                                                                                                                    ? s._(
                                                                                                                                                        /*BTDS*/ "{businessName} is no longer registered as a business account.",
                                                                                                                                                        [
                                                                                                                                                          s._param(
                                                                                                                                                            "businessName",
                                                                                                                                                            r(
                                                                                                                                                              "WAWebGetBusinessNameFromMsg",
                                                                                                                                                            )(
                                                                                                                                                              e,
                                                                                                                                                            ),
                                                                                                                                                          ),
                                                                                                                                                        ],
                                                                                                                                                      )
                                                                                                                                                    : i ===
                                                                                                                                                        "blue_msg_to_self_fb"
                                                                                                                                                      ? s._(
                                                                                                                                                          /*BTDS*/ "{businessName} now uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                                                          [
                                                                                                                                                            s._param(
                                                                                                                                                              "businessName",
                                                                                                                                                              r(
                                                                                                                                                                "WAWebGetBusinessNameFromMsg",
                                                                                                                                                              )(
                                                                                                                                                                e,
                                                                                                                                                              ),
                                                                                                                                                            ),
                                                                                                                                                          ],
                                                                                                                                                        )
                                                                                                                                                      : i ===
                                                                                                                                                          "blue_msg_unverified_to_bsp_fb_verified"
                                                                                                                                                        ? P(
                                                                                                                                                            e,
                                                                                                                                                          )
                                                                                                                                                        : i ===
                                                                                                                                                            "blue_msg_unverified_to_bsp_premise_verified"
                                                                                                                                                          ? N(
                                                                                                                                                              e,
                                                                                                                                                            )
                                                                                                                                                          : i ===
                                                                                                                                                              "blue_msg_unverified_to_self_fb_verified"
                                                                                                                                                            ? M(
                                                                                                                                                                e,
                                                                                                                                                              )
                                                                                                                                                            : i ===
                                                                                                                                                                "blue_msg_unverified_to_verified"
                                                                                                                                                              ? w(
                                                                                                                                                                  e,
                                                                                                                                                                )
                                                                                                                                                              : i ===
                                                                                                                                                                  "blue_msg_verified_to_bsp_fb_unverified"
                                                                                                                                                                ? o(
                                                                                                                                                                    "WAWebMiscGatingUtils",
                                                                                                                                                                  ).isBlueStringsEnabled()
                                                                                                                                                                  ? s._(
                                                                                                                                                                      /*BTDS*/ "{businessName} is no longer a verified account and now uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
                                                                                                                                                                      [
                                                                                                                                                                        s._param(
                                                                                                                                                                          "businessName",
                                                                                                                                                                          r(
                                                                                                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                          )(
                                                                                                                                                                            e,
                                                                                                                                                                          ),
                                                                                                                                                                        ),
                                                                                                                                                                      ],
                                                                                                                                                                    )
                                                                                                                                                                  : s._(
                                                                                                                                                                      /*BTDS*/ "{businessName} is no longer an official business account and now uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
                                                                                                                                                                      [
                                                                                                                                                                        s._param(
                                                                                                                                                                          "businessName",
                                                                                                                                                                          r(
                                                                                                                                                                            "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                          )(
                                                                                                                                                                            e,
                                                                                                                                                                          ),
                                                                                                                                                                        ),
                                                                                                                                                                      ],
                                                                                                                                                                    )
                                                                                                                                                                : i ===
                                                                                                                                                                    "blue_msg_verified_to_bsp_premise_unverified"
                                                                                                                                                                  ? o(
                                                                                                                                                                      "WAWebMiscGatingUtils",
                                                                                                                                                                    ).isBlueStringsEnabled()
                                                                                                                                                                    ? s._(
                                                                                                                                                                        /*BTDS*/ "{businessName} is no longer a verified account and now uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
                                                                                                                                                                        [
                                                                                                                                                                          s._param(
                                                                                                                                                                            "businessName",
                                                                                                                                                                            r(
                                                                                                                                                                              "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                            )(
                                                                                                                                                                              e,
                                                                                                                                                                            ),
                                                                                                                                                                          ),
                                                                                                                                                                        ],
                                                                                                                                                                      )
                                                                                                                                                                    : s._(
                                                                                                                                                                        /*BTDS*/ "{businessName} is no longer an official business account and it now uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                                                                        [
                                                                                                                                                                          s._param(
                                                                                                                                                                            "businessName",
                                                                                                                                                                            r(
                                                                                                                                                                              "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                            )(
                                                                                                                                                                              e,
                                                                                                                                                                            ),
                                                                                                                                                                          ),
                                                                                                                                                                        ],
                                                                                                                                                                      )
                                                                                                                                                                  : i ===
                                                                                                                                                                      "blue_msg_verified_to_self_fb_unverified"
                                                                                                                                                                    ? o(
                                                                                                                                                                        "WAWebMiscGatingUtils",
                                                                                                                                                                      ).isBlueStringsEnabled()
                                                                                                                                                                      ? s._(
                                                                                                                                                                          /*BTDS*/ "{businessName} is no longer a verified account and now uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
                                                                                                                                                                          [
                                                                                                                                                                            s._param(
                                                                                                                                                                              "businessName",
                                                                                                                                                                              r(
                                                                                                                                                                                "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                              )(
                                                                                                                                                                                e,
                                                                                                                                                                              ),
                                                                                                                                                                            ),
                                                                                                                                                                          ],
                                                                                                                                                                        )
                                                                                                                                                                      : s._(
                                                                                                                                                                          /*BTDS*/ "{businessName} is no longer an official business account and it now uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
                                                                                                                                                                          [
                                                                                                                                                                            s._param(
                                                                                                                                                                              "businessName",
                                                                                                                                                                              r(
                                                                                                                                                                                "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                              )(
                                                                                                                                                                                e,
                                                                                                                                                                              ),
                                                                                                                                                                            ),
                                                                                                                                                                          ],
                                                                                                                                                                        )
                                                                                                                                                                    : i ===
                                                                                                                                                                        "blue_msg_verified_to_unverified"
                                                                                                                                                                      ? o(
                                                                                                                                                                          "WAWebMiscGatingUtils",
                                                                                                                                                                        ).isBlueStringsEnabled()
                                                                                                                                                                        ? s._(
                                                                                                                                                                            /*BTDS*/ "{businessName} is no longer a verified account. Click to learn more.",
                                                                                                                                                                            [
                                                                                                                                                                              s._param(
                                                                                                                                                                                "businessName",
                                                                                                                                                                                r(
                                                                                                                                                                                  "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                                )(
                                                                                                                                                                                  e,
                                                                                                                                                                                ),
                                                                                                                                                                              ),
                                                                                                                                                                            ],
                                                                                                                                                                          )
                                                                                                                                                                        : s._(
                                                                                                                                                                            /*BTDS*/ "{businessName} is no longer registered as an official business account. Click to learn more.",
                                                                                                                                                                            [
                                                                                                                                                                              s._param(
                                                                                                                                                                                "businessName",
                                                                                                                                                                                r(
                                                                                                                                                                                  "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                                )(
                                                                                                                                                                                  e,
                                                                                                                                                                                ),
                                                                                                                                                                              ),
                                                                                                                                                                            ],
                                                                                                                                                                          )
                                                                                                                                                                      : i ===
                                                                                                                                                                          "biz_privacy_mode_init_fb"
                                                                                                                                                                        ? A(
                                                                                                                                                                            e,
                                                                                                                                                                          )
                                                                                                                                                                        : i ===
                                                                                                                                                                            "support_system_message"
                                                                                                                                                                          ? F()
                                                                                                                                                                          : i ===
                                                                                                                                                                              "biz_privacy_mode_to_fb"
                                                                                                                                                                            ? V(
                                                                                                                                                                                e,
                                                                                                                                                                              )
                                                                                                                                                                            : i ===
                                                                                                                                                                                "biz_privacy_mode_init_bsp"
                                                                                                                                                                              ? s._(
                                                                                                                                                                                  /*BTDS*/ "This business works with other companies to manage this chat. Click to learn more.",
                                                                                                                                                                                )
                                                                                                                                                                              : i ===
                                                                                                                                                                                  "biz_privacy_mode_to_bsp"
                                                                                                                                                                                ? s._(
                                                                                                                                                                                    /*BTDS*/ "This business is now working with other companies to manage this chat. Click to learn more.",
                                                                                                                                                                                  )
                                                                                                                                                                                : i ===
                                                                                                                                                                                    "block_contact"
                                                                                                                                                                                  ? O(
                                                                                                                                                                                      a,
                                                                                                                                                                                    )
                                                                                                                                                                                  : i ===
                                                                                                                                                                                      "disappearing_mode_update"
                                                                                                                                                                                    ? o(
                                                                                                                                                                                        "WAWebFormatEphemeralSetting",
                                                                                                                                                                                      ).formatEphemeralSetting(
                                                                                                                                                                                        e,
                                                                                                                                                                                      )
                                                                                                                                                                                    : i ===
                                                                                                                                                                                        "disappearing_mode"
                                                                                                                                                                                      ? o(
                                                                                                                                                                                          "WAWebFormatEphemeralSetting",
                                                                                                                                                                                        ).getDefaultDisappearingModeSystemMessageText(
                                                                                                                                                                                          e,
                                                                                                                                                                                        )
                                                                                                                                                                                      : i ===
                                                                                                                                                                                          "disappearing_mode_unsupported"
                                                                                                                                                                                        ? o(
                                                                                                                                                                                            "WAWebFormatEphemeralSetting",
                                                                                                                                                                                          ).getDMUnsupportedSystemMessageText()
                                                                                                                                                                                        : i ===
                                                                                                                                                                                            "chat_assignment"
                                                                                                                                                                                          ? W(
                                                                                                                                                                                              a,
                                                                                                                                                                                              t,
                                                                                                                                                                                            )
                                                                                                                                                                                          : i ===
                                                                                                                                                                                              "chat_assignment_unassign"
                                                                                                                                                                                            ? q(
                                                                                                                                                                                                t,
                                                                                                                                                                                              )
                                                                                                                                                                                            : i ===
                                                                                                                                                                                                "order_ephemeral_exemption"
                                                                                                                                                                                              ? U()
                                                                                                                                                                                              : i ===
                                                                                                                                                                                                  "bot_init"
                                                                                                                                                                                                ? H(
                                                                                                                                                                                                    e,
                                                                                                                                                                                                    n,
                                                                                                                                                                                                  )
                                                                                                                                                                                                : i ===
                                                                                                                                                                                                    "bot_invoke_disclaimer"
                                                                                                                                                                                                  ? G()
                                                                                                                                                                                                  : i ===
                                                                                                                                                                                                      "biz_bot_1p_disclosure"
                                                                                                                                                                                                    ? B()
                                                                                                                                                                                                    : i ===
                                                                                                                                                                                                        "biz_bot_3p_disclosure"
                                                                                                                                                                                                      ? s._(
                                                                                                                                                                                                          /*BTDS*/ "This AI is from a third-party developer. Meta receives your AI chats to improve its AI quality. Tap to learn more.",
                                                                                                                                                                                                        )
                                                                                                                                                                                                      : i ===
                                                                                                                                                                                                          "change_lid"
                                                                                                                                                                                                        ? o(
                                                                                                                                                                                                            "WAWebFormatChangeLidTemplateText",
                                                                                                                                                                                                          ).formatChangeLidLeadTemplateText(
                                                                                                                                                                                                            e,
                                                                                                                                                                                                          )
                                                                                                                                                                                                        : i ===
                                                                                                                                                                                                            "change_username"
                                                                                                                                                                                                          ? r(
                                                                                                                                                                                                              "WAWebFormatChangeUsernameTemplateText",
                                                                                                                                                                                                            )(
                                                                                                                                                                                                              e,
                                                                                                                                                                                                            )
                                                                                                                                                                                                          : i ===
                                                                                                                                                                                                              "saga_init"
                                                                                                                                                                                                            ? s._(
                                                                                                                                                                                                                /*BTDS*/ "Messages may be generated by AI and may be inaccurate or inappropriate. Click to learn more.",
                                                                                                                                                                                                              )
                                                                                                                                                                                                            : i ===
                                                                                                                                                                                                                "biz_account_type_changed_to_hosted"
                                                                                                                                                                                                              ? s._(
                                                                                                                                                                                                                  /*BTDS*/ "This business is now using a secure service from Meta to manage this chat. Click to learn more.",
                                                                                                                                                                                                                )
                                                                                                                                                                                                              : i ===
                                                                                                                                                                                                                  "biz_me_account_type_is_hosted"
                                                                                                                                                                                                                ? s._(
                                                                                                                                                                                                                    /*BTDS*/ "Your business uses a secure service from Meta to manage this chat. Click to learn more.",
                                                                                                                                                                                                                  )
                                                                                                                                                                                                                : i ===
                                                                                                                                                                                                                    "biz_account_type_is_hosted"
                                                                                                                                                                                                                  ? s._(
                                                                                                                                                                                                                      /*BTDS*/ "This business uses a secure service from Meta to manage this chat. Click to learn more.",
                                                                                                                                                                                                                    )
                                                                                                                                                                                                                  : i ===
                                                                                                                                                                                                                      "biz_me_account_type_is_hosted_transition"
                                                                                                                                                                                                                    ? s._(
                                                                                                                                                                                                                        /*BTDS*/ "Your business is now using a secure service from Meta to manage this chat. Click to learn more.",
                                                                                                                                                                                                                      )
                                                                                                                                                                                                                    : i ===
                                                                                                                                                                                                                        "marketing_messages_from_business_stopped"
                                                                                                                                                                                                                      ? s._(
                                                                                                                                                                                                                          /*BTDS*/ "Offers and announcements stopped. Click to resume.",
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                      : i ===
                                                                                                                                                                                                                          "marketing_messages_from_business_resumed"
                                                                                                                                                                                                                        ? s._(
                                                                                                                                                                                                                            /*BTDS*/ "Offers and announcements resumed. Click to stop.",
                                                                                                                                                                                                                          )
                                                                                                                                                                                                                        : i ===
                                                                                                                                                                                                                            "marketing_messages_post_send_opt_out"
                                                                                                                                                                                                                          ? s._(
                                                                                                                                                                                                                              /*BTDS*/ "You are getting offers and announcements from {businessName}",
                                                                                                                                                                                                                              [
                                                                                                                                                                                                                                s._param(
                                                                                                                                                                                                                                  "businessName",
                                                                                                                                                                                                                                  r(
                                                                                                                                                                                                                                    "WAWebGetBusinessNameFromMsg",
                                                                                                                                                                                                                                  )(
                                                                                                                                                                                                                                    e,
                                                                                                                                                                                                                                  ),
                                                                                                                                                                                                                                ),
                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                            )
                                                                                                                                                                                                                          : i ===
                                                                                                                                                                                                                              "limit_sharing_system_message"
                                                                                                                                                                                                                            ? o(
                                                                                                                                                                                                                                "WAWebLimitSharingUIUtils",
                                                                                                                                                                                                                              ).getLimitSharingMessageSystemNotificationText(
                                                                                                                                                                                                                                e,
                                                                                                                                                                                                                              )
                                                                                                                                                                                                                            : i ===
                                                                                                                                                                                                                                "is_capi_hosted_group"
                                                                                                                                                                                                                              ? z(
                                                                                                                                                                                                                                  e,
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                              : i ===
                                                                                                                                                                                                                                  "biz_automatically_labeled_chat_system_message"
                                                                                                                                                                                                                                ? j(
                                                                                                                                                                                                                                    e,
                                                                                                                                                                                                                                  )
                                                                                                                                                                                                                                : i ===
                                                                                                                                                                                                                                    "biz_per_customer_3pd_data_share_opt_in"
                                                                                                                                                                                                                                  ? s._(
                                                                                                                                                                                                                                      /*BTDS*/ "This chat started from an ad on Facebook or Instagram. Data sharing for customer-related activities is turned on",
                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                  : i ===
                                                                                                                                                                                                                                      "biz_per_customer_3pd_data_share_opt_out"
                                                                                                                                                                                                                                    ? s._(
                                                                                                                                                                                                                                        /*BTDS*/ "This chat started from an ad on Facebook or Instagram. Data sharing for customer-related activities is turned off",
                                                                                                                                                                                                                                      )
                                                                                                                                                                                                                                    : i ===
                                                                                                                                                                                                                                        "ctwa_consumer_data_sharing_disclosure_system_message"
                                                                                                                                                                                                                                      ? s._(
                                                                                                                                                                                                                                          /*BTDS*/ "This chat started from an ad on Facebook or Instagram. Click to learn more",
                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                      : i ===
                                                                                                                                                                                                                                          "group_transition_to_bot_group"
                                                                                                                                                                                                                                        ? s._(
                                                                                                                                                                                                                                            /*BTDS*/ "A group member added Meta AI to this chat. Meta can read new messages. Group admins can remove Meta AI at any time. Click to learn more.",
                                                                                                                                                                                                                                          )
                                                                                                                                                                                                                                        : i ===
                                                                                                                                                                                                                                            "biz_broadcast_status"
                                                                                                                                                                                                                                          ? r(
                                                                                                                                                                                                                                              "WAWebBizBroadcastFormatStatusText",
                                                                                                                                                                                                                                            )(
                                                                                                                                                                                                                                              a,
                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                          : s._(
                                                                                                                                                                                                                                              /*BTDS*/ "You received a message on your phone, but your version of {app name} doesn't support it.",
                                                                                                                                                                                                                                              [
                                                                                                                                                                                                                                                s._param(
                                                                                                                                                                                                                                                  "app name",
                                                                                                                                                                                                                                                  o(
                                                                                                                                                                                                                                                    "WAWebFbtAppName",
                                                                                                                                                                                                                                                  ).fbtWAWebAppShortName(),
                                                                                                                                                                                                                                                ),
                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                            );
    }
    function c(e, t) {
      var n = r("WANullthrows")(
          o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "change_number",
            templateParams: t,
          }),
          "interpretMsgTemplateParams: change_number",
        ),
        a = n[0],
        i = n.length === 4 ? n[2] : null,
        l = o("WAWebContactCollection").ContactCollection.get(a),
        u =
          l != null && o("WAWebFrontendContactGetters").getIsMyContact(l)
            ? o("WAWebFrontendContactGetters").getFormattedName(l)
            : o("WAWebWidFormat").widToFormattedUser(a),
        c = r("WAWebWid").equals(o("WAWebFrontendMsgGetters").getChat(e).id, a),
        d = r("WAWebWid").equals(o("WAWebFrontendMsgGetters").getChat(e).id, i);
      return c || d
        ? s._(/*BTDS*/ "{name} changed their phone number to a new number.", [
            s._param("name", u),
          ])
        : s._(
            /*BTDS*/ "{name} changed their phone number. You're currently chatting with their new number.",
            [s._param("name", u)],
          );
    }
    function d(e, t) {
      var n = o("WAWebFormatParticipantNames").getFormattedName(e.from);
      return t.length > 0 && t[0] === "true"
        ? s._(
            /*BTDS*/ "{receiver_name} accepted your invite to join WhatsApp",
            [s._param("receiver_name", n)],
          )
        : s._(/*BTDS*/ "{receiver_name} is new to WhatsApp", [
            s._param("receiver_name", n),
          ]);
    }
    function m(e) {
      var t = o("WAWebFormatParticipantNames").getFormattedName(e.from, !1);
      return s._(/*BTDS*/ "We let {sender_name} know you joined!", [
        s._param("sender_name", t),
      ]);
    }
    function p(e, t) {
      var n = r("WANullthrows")(
          o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_transaction_request_cancelled",
            templateParams: t,
          }),
          "interpretMsgTemplateParams: payment_transaction_request_cancelled",
        ),
        a = n[0],
        i = n[1],
        l = n[2],
        u = r("WAWebWidToFormattedNameOrNumber")(a),
        c = parseInt(l, 10),
        d = o("WAWebCurrencyUtils").formatAmount1000(i, c);
      return e.id.fromMe
        ? s._(
            /*BTDS*/ '_j{"*":"You canceled your payment request to {contactName} for {currencyAndAmount}"}',
            [
              s._plural(c / 1e3),
              s._param("contactName", u),
              s._param("currencyAndAmount", d),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":"{contactName} canceled their payment request for {currencyAndAmount}"}',
            [
              s._plural(c / 1e3),
              s._param("contactName", u),
              s._param("currencyAndAmount", d),
            ],
          );
    }
    function _(e) {
      var t = r("WANullthrows")(
          o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_transaction_status_receiver_pending_setup",
            templateParams: e,
          }),
          "interpretMsgTemplateParams: payment_transaction_status_receiver_pending_setup",
        ),
        n = t[0],
        a = t[1],
        i = t[2],
        l = r("WAWebWidToFormattedNameOrNumber")(n),
        u = parseInt(i, 10),
        c = o("WAWebCurrencyUtils").formatAmount1000(a, u);
      return s._(
        /*BTDS*/ '_j{"*":"{senderName} sent you {currencyAndAmount}. Use WhatsApp on your phone to accept this transaction."}',
        [
          s._plural(u / 1e3),
          s._param("senderName", l),
          s._param("currencyAndAmount", c),
        ],
      );
    }
    function f(e, t) {
      var n = r("WANullthrows")(
          o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_action_request_declined",
            templateParams: t,
          }),
          "interpretMsgTemplateParams: payment_action_request_declined",
        ),
        a = n[0],
        i = n[1],
        l = n[2],
        u = r("WAWebWidToFormattedNameOrNumber")(a),
        c = parseInt(l, 10),
        d = o("WAWebCurrencyUtils").formatAmount1000(i, c);
      return e.id.fromMe
        ? s._(
            /*BTDS*/ '_j{"*":"You declined {contactName}\'s payment request for {currencyAndAmount}."}',
            [
              s._plural(c / 1e3),
              s._param("contactName", u),
              s._param("currencyAndAmount", d),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":"{contactName} declined your payment request for {currencyAndAmount}."}',
            [
              s._plural(c / 1e3),
              s._param("contactName", u),
              s._param("currencyAndAmount", d),
            ],
          );
    }
    function g(e) {
      var t = r("WANullthrows")(
          o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_action_request_expired",
            templateParams: e,
          }),
          "interpretMsgTemplateParams: payment_action_request_expired",
        ),
        n = t[0],
        a = t[1],
        i = t[2],
        l = t[3],
        u = r("WAWebWidToFormattedNameOrNumber")(n),
        c = r("WAWebWidToFormattedNameOrNumber")(a),
        d = parseInt(l, 10),
        m = o("WAWebCurrencyUtils").formatAmount1000(i, d);
      return o("WAWebUserPrefsMeUser").isMeAccount(n)
        ? s._(
            /*BTDS*/ '_j{"*":"Your payment request to {receiverName} for {currencyAndAmount} expired."}',
            [
              s._plural(d / 1e3),
              s._param("receiverName", c),
              s._param("currencyAndAmount", m),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":"{senderName}\'s payment request for {currencyAndAmount} to you expired."}',
            [
              s._plural(d / 1e3),
              s._param("senderName", u),
              s._param("currencyAndAmount", m),
            ],
          );
    }
    function h(e) {
      var t = r("WANullthrows")(
          o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "payment_invite_account_set_up",
            templateParams: e,
          }),
          "interpretMsgTemplateParams: payment_invite_account_set_up",
        ),
        n = t[0];
      return s._(/*BTDS*/ "{invitee} has set up payments", [
        s._param("invitee", r("WAWebWidToFormattedNameOrNumber")(n)),
      ]);
    }
    function y(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e);
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(/*BTDS*/ "{businessName} is no longer a verified account.", [
              s._param("businessName", n),
            ])
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account, but it's saved as a different name in your contacts. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function C(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e);
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account and only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account that only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account, but it's saved as a different name in your contacts. This business only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function b(e) {
      var t = e.id.remote;
      return r("WAWebWid").isOfficialBizAccount(t)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "This chat is with WhatsApp's verified account. Click for more info.",
            )
          : s._(
              /*BTDS*/ 'This chat is with the official business account of "WhatsApp". Click for more info.',
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "This chat is with {businessName}'s verified account. Click for more info.",
              [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
            )
          : s._(
              /*BTDS*/ 'This chat is with the official business account of "{businessName}". Click for more info.',
              [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
            );
    }
    function v(e) {
      return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
        ? s._(
            /*BTDS*/ 'This business changed its name to "{businessName}". Click for more info.',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          )
        : s._(
            /*BTDS*/ 'This official business account changed its name to "{businessName}". Click for more info.',
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
    }
    function S(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e);
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "This chat is with {businessName}'s verified account. This account uses Meta and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "This chat is with the official business account of {businessName}. This business uses Facebook and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "This chat is with {businessName}'s verified account, but it's saved as a different name in your contacts. This business uses Meta and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "This chat is with the official business account of {businessName}, but it's saved as a different name in your contacts. This business uses Facebook and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function R(e) {
      return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
        ? s._(
            /*BTDS*/ "{businessName} is no longer a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          )
        : s._(
            /*BTDS*/ "{businessName} is no longer an official business account and it no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
    }
    function L(e) {
      return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
        ? s._(
            /*BTDS*/ "{businessName} is no longer a verified account and now only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          )
        : s._(
            /*BTDS*/ "{businessName} is no longer an official business account and it now only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
    }
    function E(e) {
      return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
        ? s._(
            /*BTDS*/ "{businessName} is no longer a verified account and no longer uses Meta or other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          )
        : s._(
            /*BTDS*/ "{businessName} is no longer an official business account and it no longer uses Facebook or other companies to manage its WhatsApp conversations. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
    }
    function k(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e);
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "This chat is with {businessName}'s verified account. This account uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "This chat is with the official business account of {businessName}. This business uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "This chat is with {businessName}'s verified account, but it's saved as a different name in your contacts. This account uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "This chat is with the official business account of {businessName}, but it's saved as a different name in your contacts. This business uses other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function I(e) {
      return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
        ? s._(
            /*BTDS*/ "{businessName} is no longer a verified account and no longer uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          )
        : s._(
            /*BTDS*/ "{businessName} is no longer an official business account and it no longer uses other companies to manage its WhatsApp conversations. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
    }
    function T(e) {
      return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
        ? s._(
            /*BTDS*/ "{businessName} is now a verified account that uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          )
        : s._(
            /*BTDS*/ "{businessName} is now registered as a business account that uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
    }
    function D(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e);
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account and now uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account. This business now uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account, but it's saved as a different name in your contacts. This account now uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business now uses other companies instead of Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function x(e) {
      return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
        ? s._(
            /*BTDS*/ "{businessName} is now a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          )
        : s._(
            /*BTDS*/ "{businessName} is now registered as an official business account. This business no longer uses Facebook to manage its WhatsApp conversations. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
    }
    function $(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e),
        a = o("WAWebABPropsInternalNumber").getIsInternalNumber(
          o("WAWebFrontendMsgGetters").getChat(e).id.user,
        );
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? a
          ? s._(
              /*BTDS*/ "This chat is with the official account of {businessName}. This account uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "This chat is with the official business account of {businessName}. This business uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            )
        : a
          ? s._(
              /*BTDS*/ "This chat is with the official account of {businessName}, but it's saved as a different name in your contacts. This account uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "This chat is with the official business account of {businessName}, but it's saved as a different name in your contacts. This business uses Facebook to manage its WhatsApp conversations. Click to learn more about privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function P(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e);
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account that uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account that uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account, but it's saved as a different name in your contacts. This account uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business uses Facebook and other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function N(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e);
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account that uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account that uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account, but it's saved as a different name in your contacts. This business uses other companies to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business uses other companies to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function M(e) {
      var t = e.id,
        n = r("WAWebGetBusinessNameFromMsg")(e);
      return r("WAWebDisplayedNameIsBizName")(t.remote, n)
        ? o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account that uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account that uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            )
        : o("WAWebMiscGatingUtils").isBlueStringsEnabled()
          ? s._(
              /*BTDS*/ "{businessName} is now a verified account, but it's saved as a different name in your contacts. This account uses Meta to manage its WhatsApp conversations. This changes privacy in this chat. Click here to learn more.",
              [s._param("businessName", n)],
            )
          : s._(
              /*BTDS*/ "{businessName} is now registered as an official business account, but it's saved as a different name in your contacts. This business uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat.",
              [s._param("businessName", n)],
            );
    }
    function w(e) {
      return o("WAWebMiscGatingUtils").isBlueStringsEnabled()
        ? s._(
            /*BTDS*/ "{businessName} is now a verified account. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          )
        : s._(
            /*BTDS*/ "{businessName} is now registered as an official business account. Click to learn more.",
            [s._param("businessName", r("WAWebGetBusinessNameFromMsg")(e))],
          );
    }
    function A(e) {
      return o("WAWebMsgGetters").getIsCAPISupport(e)
        ? o("WAWebSupportChatStrings").SupportChatSystemMessage()
        : s._(
            /*BTDS*/ "This business uses a secure service from Meta to manage this chat. Click to learn more.",
          );
    }
    function F() {
      return o("WAWebSupportChatStrings").SupportChatSystemMessage();
    }
    function O(e) {
      return e[0] === "true"
        ? s._(/*BTDS*/ "You blocked this person")
        : s._(/*BTDS*/ "You unblocked this person");
    }
    function B() {
      return o(
        "WAWebBizGatingUtils",
      ).isUpdatedConsumerDisclosureUiBrazilEnabled()
        ? s._(
            /*BTDS*/ "AI from Meta receives messages and may use them to improve AI quality and generate messages for this business. Click to learn more.",
          )
        : o("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled() ||
            o("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled()
          ? s._(
              /*BTDS*/ "AI from Meta receives messages to improve AI quality and generate messages for this business. Click to learn more.",
            )
          : s._(
              /*BTDS*/ "AI from Meta receives chats and generates messages for this business. Click to learn more.",
            );
    }
    function W(e, t) {
      var n = r("WANullthrows")(
          o("WAWebCommonMsgTemplateParamsUtils").interpretMsgTemplateParams({
            type: "chat_assignment",
            templateParams: e,
          }),
          "interpretMsgTemplateParams: chat_assignment",
        ),
        a = n[0];
      return o("WAWebChatAssignmentUtils").shouldUseChatAssignmentCTA(t)
        ? s._(/*BTDS*/ "Chat assigned to {agent_name}. Click to change", [
            s._param("agent_name", a),
          ])
        : s._(/*BTDS*/ "Chat assigned to {agent_name}", [
            s._param("agent_name", a),
          ]);
    }
    function q(e) {
      return o("WAWebChatAssignmentUtils").shouldUseChatAssignmentCTA(e)
        ? s._(/*BTDS*/ "Chat was unassigned. Click to change")
        : s._(/*BTDS*/ "Chat was unassigned");
    }
    function U() {
      return o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
        ? s._(
            /*BTDS*/ "Charges and payments will not disappear from this chat. Click to learn more",
          )
        : s._(
            /*BTDS*/ "Orders and payments will not disappear from this chat. Click to learn more",
          );
    }
    function V(e) {
      return o("WAWebMsgGetters").getIsIAS(e)
        ? s._(
            /*BTDS*/ "WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.",
          )
        : s._(
            /*BTDS*/ "This business is now using a secure service from Meta to manage this chat. Click to learn more.",
          );
    }
    function H(e, t) {
      return o("WAWebBotUtils").isBotChannelFBID(e.id.remote)
        ? s._(
            /*BTDS*/ "Messages are generated by AI. Some may be inaccurate or inappropriate. Learn more.",
          )
        : t === o("WAWebBotTypes").BotPosingAsProfessionalType.YES &&
            o("WAWebBotGating").isUgcNotExpertEnabled()
          ? s._(
              /*BTDS*/ "This is an AI, not a real expert who\u2019s trained or has a license to help people. It is for self-help and can\u2019t replace professional advice, diagnosis, or services. Messages are generated by AI. Some may be inaccurate or inappropriate. Click to learn more.",
            )
          : s._(
              /*BTDS*/ "Messages are generated by AI from Meta. Some may be inaccurate or inappropriate. You can improve the quality by sending feedback. Click to learn more.",
            );
    }
    function G() {
      return o("WAWebBotGating").isAiWebForwardEnabled()
        ? s._(
            /*BTDS*/ "Only messages that mention or people share with \u0040Meta AI can be read by Meta. Meta can't read any other messages in this chat. Some responses may be inaccurate or inappropriate. Click to learn more.",
          )
        : s._(
            /*BTDS*/ "Only messages that mention \u0040Meta AI are sent to Meta. Meta can't read any other messages in this chat. Some responses may be inaccurate or inappropriate. Click to learn more.",
          );
    }
    function z(e) {
      var t,
        n = o("WAWebFrontendMsgGetters").getChat(e),
        r = n.groupMetadata,
        a =
          (r == null ? void 0 : r.owner) &&
          ((t = r.participants.get(r.owner)) == null ? void 0 : t.contact);
      return a != null
        ? o("WAWebHostedGroupUtils").getSecureServicesBannerText(a)
        : "";
    }
    function j(e) {
      var t,
        n = e.templateParams[0],
        r =
          (t = o("WAWebLabelConstants").mapPredefinedIdToLabelName(
            Number(n),
          )) == null
            ? void 0
            : t.toLowerCase();
      return o("WAWebListsGatingUtils").isListsEnabled()
        ? s._(/*BTDS*/ "Chat automatically added to {labelName}", [
            s._param("labelName", r),
          ])
        : s._(/*BTDS*/ "Chat automatically labeled as {labelName}", [
            s._param("labelName", r),
          ]);
    }
    function K(e) {
      var t = e.subtype;
      return t === "change_lid"
        ? o("WAWebFormatChangeLidTemplateText").formatChangeLidCtaTemplateText(
            e,
          )
        : null;
    }
    l.default = e;
  },
  226,
);
