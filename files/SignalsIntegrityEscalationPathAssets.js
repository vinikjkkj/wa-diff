__d(
  "SignalsIntegrityEscalationPathAssets",
  [
    "fbt",
    "$InternalEnum",
    "GeoLink.react",
    "GeoText.react",
    "SensitiveContextEnum",
    "SignalsIntegritySensitiveDataAssets",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Take action");
    function d(e) {
      var t = s._(/*BTDS*/ "Unknown Location");
      if (e == null) return t;
      var n = o(
        "SignalsIntegritySensitiveDataAssets",
      ).getSensitiveDataLocationName(e);
      return n != null ? n : t;
    }
    function m(e) {
      var t = u.jsx(r("GeoLink.react"), {
          href: "https://www.facebook.com/legal/technology_terms",
          target: "_blank",
          children: s._(/*BTDS*/ "terms"),
        }),
        n = s._(
          /*BTDS*/ "Some of your event parameters are blocked because they may go against our {terms}.",
          [s._param("terms", t)],
        );
      return e == null ||
        e.escalationState == null ||
        e.escalationState === "NONE" ||
        e.escalationState === "STRIKE_1"
        ? u.jsx(r("GeoText.react"), { display: "block", children: n })
        : e != null && e.isInCoreSetup === !0
          ? u.jsxs(r("GeoText.react"), {
              display: "block",
              children: [
                s._(
                  /*BTDS*/ "Some of your parameters may contain information that goes against our",
                ),
                " ",
                t,
                ". ",
                s._(
                  /*BTDS*/ "Data restrictions limiting custom parameters and parts of URLs following the domain will be in place for at least 90 days. Review and fix the blocked parameters.",
                ),
              ],
            })
          : u.jsxs(r("GeoText.react"), {
              display: "block",
              children: [
                s._(
                  /*BTDS*/ "Some of your parameters may still contain information that goes against our",
                ),
                " ",
                t,
                ". ",
                s._(
                  /*BTDS*/ "The parameters are blocked. Review and fix the blocked parameters immediately.",
                ),
              ],
            });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t, n;
      if (e != null && e.isInCoreSetup === !0)
        return s._(
          /*BTDS*/ "Data restricted due to numerous blocks on parameters.",
        );
      var r =
        e != null
          ? ((t = e.escalatedUnacknowledgedParamsCount) != null ? t : 0) +
            ((n = e.nonEscalatedParamsCount) != null ? n : 0)
          : null;
      return r === 0 || r == null
        ? s._(/*BTDS*/ "Review blocked event parameters")
        : (e == null ? void 0 : e.escalationState) === "STRIKE_2" ||
            (e == null ? void 0 : e.escalationState) === "STRIKE_3"
          ? s._(
              /*BTDS*/ '_j{"*":"{numParameters} Event parameters blocked - action required","_1":"{numParameters} Event parameter blocked - action required"}',
              [s._plural(r), s._param("numParameters", r)],
            )
          : s._(
              /*BTDS*/ '_j{"*":"{numParameters} Event parameters blocked","_1":"{numParameters} Event parameter blocked"}',
              [s._plural(r), s._param("numParameters", r)],
            );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = s._(/*BTDS*/ "Take action on potential violations"),
      f = s._(/*BTDS*/ "Acknowledge to continue"),
      g = s._(/*BTDS*/ "Learn more about prohibited information");
    function h() {
      var e;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs((e = r("GeoText.react")), {
            children: [
              s._(
                /*BTDS*/ "When you use our Meta Business Tools, you are agreeing to only send us data which follows our",
              ),
              " ",
              u.jsx(r("GeoLink.react"), {
                href: "https://www.facebook.com/legal/technology_terms",
                target: "_blank",
                children: u.jsx("span", {
                  style: { textDecoration: "underline" },
                  children: R,
                }),
              }),
            ],
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx(e, {
            children: s._(
              /*BTDS*/ "You can't share data that includes or is based on health, financial, consumer report, or otherwise sensitive information.",
            ),
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx(e, {
            children: s._(
              /*BTDS*/ "By acknowledging, you agree not to share sensitive data with Meta, and to immediately review and fix blocked parameters.",
            ),
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx(e, {
            children: u.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/business/help/361948878201809",
              target: "_blank",
              children: u.jsx("span", {
                style: { textDecoration: "underline" },
                children: g,
              }),
            }),
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = s._(/*BTDS*/ "Learn more about prohibited information"),
      C = s._(/*BTDS*/ "I acknowledge"),
      b = s._(/*BTDS*/ "Blocked parameters");
    function v(e) {
      return s._(/*BTDS*/ '_j{"*":"{numDays} days","_1":"{numDays} day"}', [
        s._plural(e),
        s._param("numDays", e),
      ]);
    }
    v.displayName = v.name + " [from " + i.id + "]";
    var S = s._(/*BTDS*/ "Blocked parameter details"),
      R = s._(/*BTDS*/ "Meta Business Tools terms"),
      L = s._(
        /*BTDS*/ "Track statuses of parameters that are blocked because they may contain information that goes against our {meta_business_tool_terms_uri}. Select one or more parameters to get details on how to unblock or keep blocking them.",
        [
          s._param(
            "meta_business_tool_terms_uri",
            u.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/legal/technology_terms",
              target: "_blank",
              children: u.jsx("span", {
                style: { textDecoration: "underline" },
                children: R,
              }),
            }),
          ),
        ],
      ),
      E = n("$InternalEnum")({
        ACTION_REQUIRED: "action_required",
        UNBLOCKED: "unblocked",
        BLOCKED_BY_USER: "blocked_by_user",
        BLOCKED_BY_META: "blocked_by_meta",
      });
    function k(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{numParameters} parameters selected","_1":"{numParameters} parameter selected"}',
        [s._plural(e), s._param("numParameters", e)],
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      if (e == null) return "unknown";
      switch (e) {
        case r("SensitiveContextEnum").APP_CUSTOM_DATA:
        case r("SensitiveContextEnum").OFFLINE_CUSTOM_DATA:
        case r("SensitiveContextEnum").ONSITE_CUSTOM_DATA:
        case r("SensitiveContextEnum").PIXEL_CUSTOM_DATA:
        case r("SensitiveContextEnum").PLACE_CUSTOM_DATA:
          return "event_parameter";
        case r("SensitiveContextEnum").APP_EVENT_NAME:
        case r("SensitiveContextEnum").OFFLINE_EVENT_NAME:
        case r("SensitiveContextEnum").PIXEL_EVENT_NAME:
        case r("SensitiveContextEnum").PLACE_EVENT_NAME:
          return "event_name";
        case r("SensitiveContextEnum").ONSITE_URL_PARAMS:
        case r("SensitiveContextEnum").PIXEL_URL_PARAMS:
        case r("SensitiveContextEnum").PLACE_URL_PARAMS:
          return "url_param";
        case r("SensitiveContextEnum").ONSITE_URL_PATH:
        case r("SensitiveContextEnum").PIXEL_URL_PATH:
        case r("SensitiveContextEnum").PLACE_URL_PATH:
          return "url_path";
        default:
      }
      return "unknown";
    }
    function T(e, t) {
      switch (e) {
        case E.ACTION_REQUIRED:
          return t === 0
            ? s._(/*BTDS*/ "Action required (None)")
            : s._(/*BTDS*/ "Action required ({numParameters})", [
                s._param("numParameters", t),
              ]);
        case E.UNBLOCKED:
          return t === 0
            ? s._(/*BTDS*/ "Unblocked (None)")
            : s._(/*BTDS*/ "Unblocked ({numParameters})", [
                s._param("numParameters", t),
              ]);
        case E.BLOCKED_BY_META:
          return t === 0
            ? s._(/*BTDS*/ "Blocked by Meta (None)")
            : s._(/*BTDS*/ "Blocked by Meta ({numParameters})", [
                s._param("numParameters", t),
              ]);
        case E.BLOCKED_BY_USER:
          return t === 0
            ? s._(/*BTDS*/ "Blocked by user (None)")
            : s._(/*BTDS*/ "Blocked by user ({numParameters})", [
                s._param("numParameters", t),
              ]);
      }
    }
    function D(e) {
      switch (e) {
        case E.ACTION_REQUIRED:
          return s._(
            /*BTDS*/ "Hooray! You're up to date with your parameters.",
          );
        case E.UNBLOCKED:
          return s._(
            /*BTDS*/ "No unblocked parameters. If you or someone on your account unblocks a parameter, it will be listed here.",
          );
        case E.BLOCKED_BY_USER:
          return s._(
            /*BTDS*/ "No parameters have been blocked by you or anyone on your account. If you're receiving alerts about parameters being blocked, check to see if it was blocked by Meta.",
          );
        case E.BLOCKED_BY_META:
          return s._(/*BTDS*/ "No parameters Blocked by Meta.");
      }
    }
    var x = s._(/*BTDS*/ "Event parameter"),
      $ = s._(/*BTDS*/ "Event name"),
      P = s._(/*BTDS*/ "Location"),
      N = s._(/*BTDS*/ "Asset name"),
      M = s._(/*BTDS*/ "Date detected"),
      w = s._(/*BTDS*/ "Time left"),
      A = s._(/*BTDS*/ "Blocked on"),
      F = s._(/*BTDS*/ "Allowed on"),
      O = s._(/*BTDS*/ "Select one or more escalated parameters"),
      B = s._(
        /*BTDS*/ "You can't select this parameter because it's been unblocked too many times",
      ),
      W = s._(/*BTDS*/ "Filter by"),
      q = s._(/*BTDS*/ "Data set"),
      U = s._(/*BTDS*/ "Data set filter selector"),
      V = s._(/*BTDS*/ "Event"),
      H = s._(/*BTDS*/ "Event filter selector"),
      G = s._(/*BTDS*/ "Parameter name"),
      z = s._(/*BTDS*/ "Why this happened"),
      j = s._(
        /*BTDS*/ "It looks like data in your event parameter may go against our {learn_more_about_core_setup_uri}.",
        [
          s._param(
            "learn_more_about_core_setup_uri",
            u.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/legal/technology_terms",
              target: "_blank",
              children: u.jsx("span", {
                style: { textDecoration: "underline" },
                children: R,
              }),
            }),
          ),
        ],
      );
    function K() {
      var e;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs((e = r("GeoText.react")), {
            children: [
              s._(
                /*BTDS*/ "It looks like some event parameters in your data may contain information that goes against our",
              ),
              " ",
              u.jsx(r("GeoLink.react"), {
                href: "https://www.facebook.com/legal/technology_terms",
                target: "_blank",
                children: u.jsx("span", {
                  style: { textDecoration: "underline" },
                  children: R,
                }),
              }),
              ". ",
            ],
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx(e, {
            children: s._(
              /*BTDS*/ "When you use our Meta Business Tools, you are agreeing to only send us data which follows our terms. You can't share data that includes or is based on health, financial, consumer report, or otherwise sensitive information.",
            ),
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx(e, {
            children: s._(
              /*BTDS*/ "When event parameters are blocked, it is critical to review and fix the blocked parameters immediately to remove any potentially sensitive data.",
            ),
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx(e, {
            children: s._(
              /*BTDS*/ "By addressing issues in the data you send us, you're helping protect your customers and your business.",
            ),
          }),
        ],
      });
    }
    K.displayName = K.name + " [from " + i.id + "]";
    function Q() {
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("GeoText.react"), {
            children: s._(
              /*BTDS*/ "Data restrictions limiting custom parameters and parts of URLs following the domain will be in place for at least 90 days.",
            ),
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx(r("GeoText.react"), {
            children: s._(
              /*BTDS*/ "Less data may be sent to us, and functionality in ad features, such as custom conversion and custom audiences, may be limited.",
            ),
          }),
        ],
      });
    }
    Q.displayName = Q.name + " [from " + i.id + "]";
    function X() {
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(
                /*BTDS*/ "Health, financial, consumer report, or other categories of sensitive information (including information defined as sensitive under applicable laws, regulations, and industry guidelines)",
              ),
            }),
          }),
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(
                /*BTDS*/ "Customer information parameters that are not hashed and sent as required by Meta",
              ),
            }),
          }),
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(
                /*BTDS*/ "Identifiers such as social security numbers and credit card numbers",
              ),
            }),
          }),
        ],
      });
    }
    X.displayName = X.name + " [from " + i.id + "]";
    var Y = s._(
        /*BTDS*/ "Examples of information you should not send to us include:",
      ),
      J = s._(/*BTDS*/ "What this means for your business"),
      Z = s._(/*BTDS*/ "The parameter will be restricted from our tools:");
    function ee() {
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(/*BTDS*/ "Less data may be sent to us"),
            }),
          }),
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(
                /*BTDS*/ "Functionality in certain ad features may be limited (such as custom conversions and custom audiences)",
              ),
            }),
          }),
        ],
      });
    }
    ee.displayName = ee.name + " [from " + i.id + "]";
    var te = s._(/*BTDS*/ "Not sure how to address your parameter issues?"),
      ne = s._(/*BTDS*/ "See instructions"),
      re = s._(/*BTDS*/ "What you can do"),
      oe = s._(/*BTDS*/ "Unblock parameter"),
      ae = s._(
        /*BTDS*/ "Selecting this option will unblock the parameter so you can continue sending and using it in features like custom conversions and custom audiences. If further issues are detected, the parameter will be blocked again, which can lead to data restrictions. Unblock parameter if you have:",
      );
    function ie() {
      return u.jsxs("div", {
        children: [
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(/*BTDS*/ "\u2022 Reviewed and fixed the parameter"),
            }),
          }),
          u.jsx("li", {
            children: u.jsxs(r("GeoText.react"), {
              children: [
                s._(
                  /*BTDS*/ "\u2022 Confirmed you are not sharing sensitive data and are only sending us data which follows our",
                ),
                " ",
                u.jsx(r("GeoLink.react"), {
                  href: "https://www.facebook.com/legal/technology_terms",
                  target: "_blank",
                  children: u.jsx("span", {
                    style: { textDecoration: "underline" },
                    children: R,
                  }),
                }),
                " ",
              ],
            }),
          }),
        ],
      });
    }
    ie.displayName = ie.name + " [from " + i.id + "]";
    var le = s._(/*BTDS*/ "Keep blocking parameter"),
      se = s._(
        /*BTDS*/ "Selecting this option prevents the parameter from being sent through our tools and stops detection alerts. Keep blocking the parameter if:",
      );
    function ue() {
      return u.jsxs("div", {
        children: [
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(
                /*BTDS*/ "\u2022 You're unable to review and update the parameter now",
              ),
            }),
          }),
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(
                /*BTDS*/ "\u2022 You can't confirm the event data can be shared, per our terms",
              ),
            }),
          }),
          u.jsx("li", {
            children: u.jsx(r("GeoText.react"), {
              children: s._(
                /*BTDS*/ "\u2022 You want to avoid the parameter causing data restrictions",
              ),
            }),
          }),
        ],
      });
    }
    ue.displayName = ue.name + " [from " + i.id + "]";
    var ce = s._(/*BTDS*/ "Success");
    function de(e) {
      switch (e) {
        case "CLEARED":
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx(r("GeoText.react"), {
                children: s._(
                  /*BTDS*/ "You've confirmed that when you send the selected event parameters, you are not sharing sensitive data and are only sending us data which follows our terms.",
                ),
              }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx(r("GeoText.react"), {
                children: s._(
                  /*BTDS*/ "These parameters are no longer blocked. As long as no further issues are detected, you'll be able to keep using the data for custom conversions, custom audiences and other ad features.",
                ),
              }),
            ],
          });
        case "KEEP_BLOCKING":
          return u.jsx(r("GeoText.react"), {
            children: s._(
              /*BTDS*/ "You\u2019ve confirmed that you want us to keep blocking the selected event parameters. You will no longer receive detection alerts for these parameters.",
            ),
          });
      }
    }
    de.displayName = de.name + " [from " + i.id + "]";
    var me = s._(/*BTDS*/ "Data restrictions"),
      pe = s._(/*BTDS*/ "Data controls"),
      _e = s._(/*BTDS*/ "Meta Pixel settings"),
      fe = s._(/*BTDS*/ "Manage parameter blocking"),
      ge = s._(/*BTDS*/ "Review"),
      he = s._(
        /*BTDS*/ "Review parameters that were blocked because they may go against our {meta_business_tool_terms_uri}. You can request to unblock parameters you've fixed or keep them blocked.",
        [
          s._param(
            "meta_business_tool_terms_uri",
            u.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/legal/technology_terms",
              target: "_blank",
              children: R,
            }),
          ),
        ],
      ),
      ye = s._(
        /*BTDS*/ "Some of your parameters have been blocked because they may contain information that goes against our {meta_business_tool_terms_uri}. Review and fix the blocked parameters. Request to unblock fixed parameters or keep them blocked.",
        [
          s._param(
            "meta_business_tool_terms_uri",
            u.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/legal/technology_terms",
              target: "_blank",
              children: s._(/*BTDS*/ "terms"),
            }),
          ),
        ],
      ),
      Ce = s._(/*BTDS*/ "Event parameters blocked");
    function be(e, t) {
      return e || t === "CORE_SETUP"
        ? u.jsxs(u.Fragment, {
            children: [
              u.jsxs(r("GeoText.react"), {
                children: [
                  s._(
                    /*BTDS*/ "Data is restricted because some event parameters may contain information that goes against our",
                  ),
                  " ",
                  u.jsx(r("GeoLink.react"), {
                    href: "https://www.facebook.com/legal/technology_terms",
                    target: "_blank",
                    children: u.jsx("span", {
                      style: { textDecoration: "underline" },
                      children: R,
                    }),
                  }),
                  ". ",
                ],
              }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx(r("GeoText.react"), {
                children: s._(
                  /*BTDS*/ "Data restrictions limiting custom parameters and parts of URLs following the domain will be in place for at least 90 days. Less data may be sent to us and functionality in certain ad features may be limited.",
                ),
              }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsxs(r("GeoText.react"), {
                children: [
                  s._(/*BTDS*/ "View more details about this"),
                  " ",
                  u.jsx(r("GeoLink.react"), {
                    href: "https://www.facebook.com/business/help/124742407297678",
                    target: "_blank",
                    children: u.jsx("span", {
                      style: { textDecoration: "underline" },
                      children: s._(/*BTDS*/ "data restriction"),
                    }),
                  }),
                  s._(/*BTDS*/ "."),
                ],
              }),
            ],
          })
        : t === "STRIKE_2" || t === "STRIKE_3"
          ? u.jsxs(u.Fragment, {
              children: [
                u.jsxs(r("GeoText.react"), {
                  children: [
                    s._(
                      /*BTDS*/ "Some event parameters in your data may still contain information that goes against our",
                    ),
                    " ",
                    u.jsx(r("GeoLink.react"), {
                      href: "https://www.facebook.com/legal/technology_terms",
                      target: "_blank",
                      children: u.jsx("span", {
                        style: { textDecoration: "underline" },
                        children: R,
                      }),
                    }),
                    ". ",
                  ],
                }),
                u.jsx("br", {}),
                u.jsx("br", {}),
                u.jsx(r("GeoText.react"), {
                  children: s._(
                    /*BTDS*/ "The parameters are blocked. Review and fix the blocked parameters immediately to remove any potentially sensitive data and ensure you are only sending us data which follows our terms.",
                  ),
                }),
                u.jsx("br", {}),
                u.jsx("br", {}),
                u.jsx(r("GeoText.react"), {
                  children: s._(
                    /*BTDS*/ "If further issues are detected, your data may be restricted and functionality in certain ad features may be limited.",
                  ),
                }),
              ],
            })
          : u.jsxs(u.Fragment, {
              children: [
                u.jsxs(r("GeoText.react"), {
                  children: [
                    s._(
                      /*BTDS*/ "Some event parameters in your data may contain information that goes against our",
                    ),
                    " ",
                    u.jsx(r("GeoLink.react"), {
                      href: "https://www.facebook.com/legal/technology_terms",
                      target: "_blank",
                      children: u.jsx("span", {
                        style: { textDecoration: "underline" },
                        children: R,
                      }),
                    }),
                    ". ",
                  ],
                }),
                u.jsx("br", {}),
                u.jsx("br", {}),
                u.jsx(r("GeoText.react"), {
                  children: s._(
                    /*BTDS*/ "The parameters are blocked. This means you won't be able to use its data in features like custom conversions and custom audiences.",
                  ),
                }),
                u.jsx("br", {}),
                u.jsx("br", {}),
                u.jsx(r("GeoText.react"), {
                  children: s._(
                    /*BTDS*/ "Review and fix the parameters. You can request to unblock parameters you've fixed or keep them blocked. By addressing issues in the data you send us, you're helping protect your customers and your business.",
                  ),
                }),
              ],
            });
    }
    be.displayName = be.name + " [from " + i.id + "]";
    var ve = s._(
        /*BTDS*/ "You don't have edit permissions for this data source. Please contact your account admin.",
      ),
      Se = s._(
        /*BTDS*/ "You don't have edit access to this dataset. Contact your admin to get access.",
      );
    ((l.TAKE_ACTION = c),
      (l.getEscalationPathModalLocationCellContent = d),
      (l.getDescriptionForAcknowledgeableConsolidatedEscalationPathMD = m),
      (l.getTitleForConsolidatedEscalationPathMD = p),
      (l.EXPANDING_LABEL = _),
      (l.BEFORE_TAKING_ACTION_MODAL_TITLE = f),
      (l.getBeforeTakingActionModalMainDescription = h),
      (l.READ_MORE_ABOUT_PROHIBITED_INFO_LINK = y),
      (l.I_ACKNOWLEDGE_BUTTON_TEXT = C),
      (l.ESCALATION_PATH_MODAL_TITLE = b),
      (l.getTimeLeftText = v),
      (l.TAKE_ACTION_MODAL_TITLE = S),
      (l.ESCALATION_PATH_MODAL_DESCRIPTION_HYPERLINKED = L),
      (l.EscalationPathModalTab = E),
      (l.getParamsSelectedCheckboxLabel = k),
      (l.getSensitiveDataLocationTableKey = I),
      (l.getEscalationPathModalTabLabel = T),
      (l.getEmptyStateMessageForTab = D),
      (l.EVENT_PARAMETER_COLUMN_HEADER = x),
      (l.EVENT_NAME_COLUMN_HEADER = $),
      (l.LOCATION_COLUMN_HEADER = P),
      (l.ASSET_NAME_HEADER = N),
      (l.DATE_DETECTED_HEADER = M),
      (l.TIME_LEFT_HEADER = w),
      (l.BLOCKED_ON_HEADER = A),
      (l.ALLOWED_ON_HEADER = F),
      (l.TAKE_ACTION_BUTTON_DISABLED_TOOLTIP = O),
      (l.PARAMETER_SELECT_DISABLED_TOOLTIP = B),
      (l.FILTER_BY_TEXT = W),
      (l.DATA_SET_FILTER_DROPDOWN_PLACEHOLDER_TEXT = q),
      (l.DATA_SET_FILTER_DROPDOWN_LABEL = U),
      (l.EVENT_FILTER_DROPDOWN_PLACEHOLDER_TEXT = V),
      (l.EVENT_FILTER_DROPDOWN_LABEL = H),
      (l.PARAM_INFO_CARD_TITLE = G),
      (l.WHY_THIS_HAPPENED_CARD_TITLE = z),
      (l.WHY_THIS_HAPPNENED_CARD_DESCRIPTION = j),
      (l.getCoreSetupTakeActionModalWhyThisHappenedDescription = K),
      (l.getCoreSetupTakeActionModalWhatThisMeansForYourBusinessDescription =
        Q),
      (l.getInfoYouShouldNotSendToUs = X),
      (l.WHY_THIS_HAPPENED_CARD_EXAMPLES_OF_INFORMATION_TITLE = Y),
      (l.WHAT_THIS_MEANS_FOR_YOUR_BUSINESS_CARD_TITLE = J),
      (l.WHAT_THIS_MEANS_FOR_YOUR_BUSINESS_CARD_DESCRIPTION = Z),
      (l.getWhatThisMeansForYourBusinessCardRestrictionImplications = ee),
      (l.NOT_SURE_HOW_TO_ADDRESS_PARAMETER_ISSUES = te),
      (l.SEE_INSTRUCTIONS = ne),
      (l.WHAT_YOU_CAN_DO_CARD_TITLE = re),
      (l.UNBLOCK_PARAMETER_OPTION_TITLE = oe),
      (l.UNBLOCK_PARAMETER_OPTION_DESCRIPTION = ae),
      (l.getUnblockParameterOptionContent = ie),
      (l.KEEP_BLOCKING_PARAMETER_OPTION_TITLE = le),
      (l.KEEP_BLOCKING_PARAMETER_OPTION_DESCRIPTION = se),
      (l.getKeepBlockingParameterOptionContent = ue),
      (l.CONFIRMATION_MODAL_TITLE = ce),
      (l.getConfirmationThanksMessage = de),
      (l.SETTINGS_SECTION_TITLE = me),
      (l.SETTING_SECTION_TITLE_SMART_SETUP = pe),
      (l.SETTINGS_SECTION_META_PIXEL_DATA_SHARE_HEADING = _e),
      (l.SETTINGS_SECTION_PARAMETER_BLOCKING_HEADING = fe),
      (l.SETTINGS_SECTION_REVIEW_BUTTON = ge),
      (l.SETTINGS_SECTION_PARAMETER_BLOCKING_DESCRIPTION_HYPERLINKED = he),
      (l.OVERVIEW_PAGE_CARD_DESCRIPTION = ye),
      (l.OVERVIEW_PAGE_CARD_TITLE = Ce),
      (l.getEscalationPathGAIllustrationModalDescription = be),
      (l.NEED_DATA_SOURCE_EDIT_PERMISSIONS_FBT = ve),
      (l.NEED_DATASET_EDIT_PERMISSIONS_FBT = Se));
  },
  226,
);
