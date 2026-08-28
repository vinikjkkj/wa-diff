__d(
  "SignalsIntegritySensitiveDataAssets",
  [
    "fbt",
    "GeoBaseText.react",
    "GeoFlexbox.react",
    "GeoHeading.react",
    "GeoLink.react",
    "GeoText.react",
    "SensitiveContextEnum",
    "SignalsHomeHelpContent",
    "err",
    "geoMargin",
    "meta-brand-list-magnifying-glass-filled-16",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "_removed_",
      d = s._(/*BTDS*/ "removed");
    function m(e) {
      switch (e) {
        case 5:
          return s._(/*BTDS*/ "health data");
        case 1:
          return s._(/*BTDS*/ "personal data");
        case 6:
          return s._(/*BTDS*/ "financial data");
        case 0:
          return s._(/*BTDS*/ "data");
      }
      return null;
    }
    function p(e) {
      if (e == null) return !1;
      switch (e) {
        case 1:
        case 6:
        case 7:
        case 2:
        case 8:
        case 10:
          return !0;
        default:
          return !1;
      }
    }
    function _(e) {
      switch (e) {
        case 11:
          return s._(/*BTDS*/ "Access Token");
        case 10:
          return s._(/*BTDS*/ "Address");
        case 15:
          return s._(/*BTDS*/ "Bank Routing Number");
        case 16:
          return s._(/*BTDS*/ "Blood Type");
        case 5:
          return s._(/*BTDS*/ "Credit Card");
        case 8:
          return s._(/*BTDS*/ "Date of Birth");
        case 1:
          return s._(/*BTDS*/ "Email");
        case 6:
          return s._(/*BTDS*/ "First name");
        case 9:
          return s._(/*BTDS*/ "GPS");
        case 13:
          return s._(/*BTDS*/ "Health");
        case 14:
          return s._(/*BTDS*/ "IBAN");
        case 7:
          return s._(/*BTDS*/ "Last name");
        case 0:
          return s._(/*BTDS*/ "Other");
        case 3:
          return s._(/*BTDS*/ "Password");
        case 2:
          return s._(/*BTDS*/ "Phone Number");
        case 4:
          return s._(/*BTDS*/ "SSN");
        case 12:
          return s._(/*BTDS*/ "UII");
        case 17:
          return s._(/*BTDS*/ "IP Address");
      }
      return null;
    }
    function f(e) {
      switch (e) {
        case r("SensitiveContextEnum").APP_CUSTOM_DATA:
        case r("SensitiveContextEnum").OFFLINE_CUSTOM_DATA:
        case r("SensitiveContextEnum").ONSITE_CUSTOM_DATA:
        case r("SensitiveContextEnum").PIXEL_CUSTOM_DATA:
        case r("SensitiveContextEnum").PLACE_CUSTOM_DATA:
          return s._(/*BTDS*/ "Event Parameter");
        case r("SensitiveContextEnum").APP_EVENT_NAME:
        case r("SensitiveContextEnum").OFFLINE_EVENT_NAME:
        case r("SensitiveContextEnum").PIXEL_EVENT_NAME:
        case r("SensitiveContextEnum").PLACE_EVENT_NAME:
          return s._(/*BTDS*/ "Event Name");
        case r("SensitiveContextEnum").ONSITE_URL_PARAMS:
        case r("SensitiveContextEnum").PIXEL_URL_PARAMS:
        case r("SensitiveContextEnum").PLACE_URL_PARAMS:
          return s._(/*BTDS*/ "URL Query Parameter");
        case r("SensitiveContextEnum").ONSITE_URL_PATH:
        case r("SensitiveContextEnum").PIXEL_URL_PATH:
        case r("SensitiveContextEnum").PLACE_URL_PATH:
          return s._(/*BTDS*/ "URL Path");
        default:
      }
      return null;
    }
    function g(e, t, n) {
      return e === 5
        ? u.jsx(r("GeoLink.react"), {
            display: "inline",
            href: o("SignalsHomeHelpContent").getHelpContentURL(
              o("SignalsHomeHelpContent").Entries.SENSITIVE_HEALTH_INFORMATION,
            ),
            onClick: t,
            showUnderline: "always",
            target: "_blank",
            children: n,
          })
        : e === 1
          ? u.jsx(r("GeoLink.react"), {
              display: "inline",
              href: o("SignalsHomeHelpContent").getHelpContentURL(
                o("SignalsHomeHelpContent").Entries
                  .PERSONALLY_IDENTIFIABLE_INFORMATION,
              ),
              onClick: t,
              showUnderline: "always",
              target: "_blank",
              children: n,
            })
          : e === 6
            ? u.jsx(r("GeoLink.react"), {
                display: "inline",
                href: o("SignalsHomeHelpContent").getHelpContentURL(
                  o("SignalsHomeHelpContent").Entries
                    .SENSITIVE_FINANCIAL_INFORMATION,
                ),
                onClick: t,
                showUnderline: "always",
                target: "_blank",
                children: n,
              })
            : null;
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = m(e);
      return s._(/*BTDS*/ "Review potentially violating {categoryName}", [
        s._param("categoryName", t),
      ]);
    }
    var y = s._(
        /*BTDS*/ "Information in your data may go against Meta's terms and policies",
      ),
      C = s._(
        /*BTDS*/ "Please immediately review the data you're sharing and update your setup to only share data which complies with the Meta Business Tools Terms.",
      );
    function b(e, t) {
      var n = m(e);
      return s._(
        /*BTDS*/ '_j{"*":"We detected potentially violating {category_name} in {number} events that may not comply with our terms and policies.","_1":"We detected potentially violating {category_name} in 1 event that may not comply with our terms and policies."}',
        [s._plural(t, "number"), s._param("category_name", n)],
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t, n) {
      var o = m(e),
        a = b(e, t),
        i = s._(/*BTDS*/ "review our {category} requirements.", [
          s._param("category", o),
        ]),
        l = g(e, n, i),
        c = s._(
          /*BTDS*/ "Compliant data protects your users and keeps their information usable and beneficial for your business.To make sure you send us compliant data in the future, {sensitive_data_learn_more_link}",
          [s._param("sensitive_data_learn_more_link", l)],
        ),
        d = s._(
          /*BTDS*/ "To protect the privacy of your users, we haven't stored this data in our ad systems and you won't be able to view or use it. This may impact the performance of any ads optimizing on the affected events, including those in custom audiences or custom conversions.",
        );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("GeoText.react"), { display: "block", children: a }),
          u.jsx("br", {}),
          u.jsx(r("GeoText.react"), { display: "block", children: c }),
          u.jsx("br", {}),
          u.jsx(r("GeoText.react"), { display: "block", children: d }),
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return [
        s._(
          /*BTDS*/ "To help you avoid further action from Meta, review your data and verify that it complies with our terms. See Diagnostics for specific issues in data.",
        ),
        s._(
          /*BTDS*/ "If you continue to share information that may go against the terms, we may restrict data you can share with us through Meta Business Tools, such as custom parameters and parts of URLs after the domain.",
        ),
        s._(
          /*BTDS*/ "If data becomes restricted, the size of your custom audiences may decrease, causing ad campaigns to be paused.",
        ),
      ];
    }
    function R(e) {
      var t = o("SignalsHomeHelpContent").getHelpContentURL(
        e === "APP_EVENT"
          ? o("SignalsHomeHelpContent").Entries.APP_AUTOMATIC_ADVANCED_MATCHING
          : o("SignalsHomeHelpContent").Entries
              .PIXEL_AUTOMATIC_ADVANCED_MATCHING,
      );
      return u.jsx(r("GeoLink.react"), {
        display: "inline",
        href: t,
        target: "_blank",
        children: s._(
          /*BTDS*/ "Learn more about implementing advanced matching",
        ),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = m(e),
        n = s._(
          /*BTDS*/ "Review each event to determine if any potentially violating {category_name} is being sent. If it is, remove it using the provided fix. Lastly, send a test event of each event to make sure the violating data has been removed.",
          [s._param("category_name", t)],
        );
      return u.jsx(r("GeoText.react"), { display: "block", children: n });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return e ? s._(/*BTDS*/ "Confirmed") : s._(/*BTDS*/ "Not Confirmed");
    }
    var k = s._(/*BTDS*/ "Event"),
      I = s._(
        /*BTDS*/ "The event found to contain potentially violating information",
      ),
      T = s._(/*BTDS*/ "Location"),
      D = s._(
        /*BTDS*/ "Where in the event the potentially violating information was detected",
      ),
      x = s._(/*BTDS*/ "Last Detected"),
      $ = s._(/*BTDS*/ "Review Details"),
      P = s._(/*BTDS*/ "Event Parameter"),
      N = s._(/*BTDS*/ "Event Name"),
      M = s._(/*BTDS*/ "Timestamp"),
      w = s._(/*BTDS*/ "First Detected"),
      A = s._(
        /*BTDS*/ "First detected (in last 30 days) date when the sensitive data happens",
      ),
      F = s._(/*BTDS*/ "Status"),
      O = s._(/*BTDS*/ "Data samples"),
      B = s._(/*BTDS*/ "Go to Pages");
    function W(e, t) {
      if (e === "PIXEL" || t === 1 || t === 2)
        return s._(
          /*BTDS*/ "You should discuss this with your website manager",
        );
      if (e === "APP_EVENT" || t === 3)
        return s._(/*BTDS*/ "You should discuss this with your app developer");
      if (e === "DATA_SET")
        return s._(
          /*BTDS*/ "You should discuss this with the person who set up your offline event uploads",
        );
      if (e === "ALL")
        return s._(
          /*BTDS*/ "You should discuss this with your website manager, app developer, or person who set up offline events",
        );
      throw r("err")(
        "No data source type %s supported for generating discuss with manager text",
        e,
      );
    }
    function q(e, t, n) {
      var o = u.jsx(r("GeoBaseText.react"), {
        color: "value",
        display: "inline",
        size: "value",
        weight: "bold",
        children: _(t),
      });
      return n
        ? s._(
            /*BTDS*/ "{typeName} data can be sent to Facebook, but must be set up correctly. {learn_more_advanced_matching} in order to send this data in accordance with Facebook's requirements.",
            [
              s._param("typeName", o),
              s._param("learn_more_advanced_matching", R(e)),
            ],
          )
        : s._(
            /*BTDS*/ "{typeName} data should never be sent to Facebook. You'll need to remove this data from the website URL to help prevent this from occurring.",
            [s._param("typeName", o)],
          );
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U(e) {
      var t = e.category,
        n = e.channel,
        o = e.eventName,
        a = e.key,
        i = e.location,
        l = e.onOpenHelpCenter,
        d = e.type;
      if (n === "events_manager_diagnostics") return null;
      var p = u.jsx(r("GeoBaseText.react"), {
          color: "value",
          display: "inline",
          size: "value",
          weight: "bold",
          children: m(t),
        }),
        h =
          o === c
            ? u.jsx(r("GeoText.react"), {
                display: "inline",
                children: s._(/*BTDS*/ "custom"),
              })
            : u.jsx(r("GeoBaseText.react"), {
                color: "value",
                display: "inline",
                size: "value",
                weight: "bold",
                children: o,
              }),
        y = u.jsx(r("GeoBaseText.react"), {
          color: "value",
          display: "inline",
          size: "value",
          weight: "bold",
          children: a,
        }),
        C = u.jsx(r("GeoBaseText.react"), {
          color: "value",
          display: "inline",
          size: "value",
          weight: "bold",
          children: f(i),
        }),
        b = null;
      if (t === 5 || t === 6)
        o === c
          ? (b = s._(
              /*BTDS*/ "We detected potentially violating {category_name} in the {location_name}. To help protect Facebook users' privacy, this information is blocked and you will not be able to view or use it.",
              [s._param("category_name", p), s._param("location_name", C)],
            ))
          : (b = s._(
              /*BTDS*/ "We detected potentially violating {category_name} that appeared as {key_name} coming from your {event_name} events in the {location_name}. To help protect Facebook users' privacy, this information is blocked and you will not be able to view or use it.",
              [
                s._param("category_name", p),
                s._param("key_name", y),
                s._param("event_name", h),
                s._param("location_name", C),
              ],
            ));
      else if (t === 1) {
        var v = u.jsx(r("GeoBaseText.react"), {
          color: "value",
          display: "inline",
          size: "value",
          weight: "bold",
          children: _(d),
        });
        o === c
          ? (b = s._(
              /*BTDS*/ "We detected the data {type_name} coming from your {location_name}. To help protect Facebook users' privacy, this information was blocked and you will not be ablt to view or use it.",
              [s._param("type_name", v), s._param("location_name", C)],
            ))
          : (b = s._(
              /*BTDS*/ "We detected {type_name} data that appeared as {key_name} coming from your {event_name} events in the {location_name}. To help protect Facebook users' privacy, this information was blocked and you will not be able to view or use it.",
              [
                s._param("type_name", v),
                s._param("key_name", y),
                s._param("event_name", h),
                s._param("location_name", C),
              ],
            ));
      }
      var S = s._(/*BTDS*/ "Learn more about our {category} requirements", [
        s._param("category", m(t)),
      ]);
      return b != null
        ? u.jsxs(u.Fragment, {
            children: [
              u.jsx(r("GeoText.react"), {
                display: "inline",
                xstyle: r("geoMargin").end4,
                children: b,
              }),
              g(t, l, S),
            ],
          })
        : null;
    }
    U.displayName = U.name + " [from " + i.id + "]";
    var V = s._(/*BTDS*/ "Update your URL query parameters");
    function H(e) {
      var t = null;
      return (
        e === 2
          ? (t = s._(
              /*BTDS*/ "URL Query Parameters are an optional parameter you can send through your API that come from the website URL. Removing the information from the website URL may help to prevent this from occurring. View your affected URL and look for where the specific parameter is shown as being removed to help find the problem. You should discuss this with your website manager.",
            ))
          : (t = s._(
              /*BTDS*/ "URL Query Parameters don't appear in the pixel code, they are gathered from a web page automatically when an event is fired. Removing the information from the website URL may help to prevent this from occurring. View your affected URL and look for where the specific parameter is shown as being removed to help find the problem. You should discuss this with your website manager.",
            )),
        u.jsx(r("GeoText.react"), { display: "block", children: t })
      );
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G(e) {
      var t = e.connectionMethod,
        n = e.dataSourceType,
        o = e.type,
        a = e.useAdvancedMatching,
        i = null,
        l = null;
      return (
        t === 2
          ? (i = s._(
              /*BTDS*/ "URL Query Parameters are an optional parameter you can send through your API that come from the website URL. View your affected URL and look for where the specific parameter is shown as being removed to help find the problem.",
            ))
          : (i = s._(
              /*BTDS*/ "URL Query Parameters don't appear in the pixel code, they are gathered from a web page automatically when an event is fired. View your affected URL and look for where the specific parameter is shown as being removed to help find the problem.",
            )),
        (l = q(n, o, a)),
        u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("GeoText.react"), { display: "block", children: i }),
            l != null
              ? u.jsxs(u.Fragment, {
                  children: [
                    u.jsx("br", {}),
                    u.jsx(r("GeoText.react"), {
                      display: "block",
                      children: l,
                    }),
                  ],
                })
              : null,
            u.jsx(r("GeoText.react"), { display: "block", children: W(n, t) }),
          ],
        })
      );
    }
    G.displayName = G.name + " [from " + i.id + "]";
    var z = s._(/*BTDS*/ "Update your event custom data parameters");
    function j(e, t) {
      var n = null;
      switch (e) {
        case "PIXEL":
          t === 2
            ? (n = s._(
                /*BTDS*/ "You can update your Conversion API event parameters to remove the potentially violating information from your events. View the affected URLs to get a snapshot of where these events are being detected, then update the Conversion API code to stop the parameters being sent with the events. You should discuss this with your website manager.",
              ))
            : (n = s._(
                /*BTDS*/ "You can update your pixel event parameters to remove the potentially violating information from your events. View the affected URLs to get a snapshot of where these events are being detected, then update the pixel code on your website to stop the parameters being sent with the events. You should discuss this with your website manager.",
              ));
          break;
        case "APP_EVENT":
          n = s._(
            /*BTDS*/ "You can update your app event parameters to remove the potentially violating information from being sent. Review which events contain potentially violating parameters, then find them in your app code and remove the parameters. You should discuss this with your app developer.",
          );
          break;
        case "DATA_SET":
          n = s._(
            /*BTDS*/ "You can update your offline event parameters to remove the potentially violating information from being sent. Review which events contain potentially violating parameters, then find them in your manual upload spreadsheet or API code and remove the parameters. You should discuss this with the person who set up your offline event uploads.",
          );
      }
      return u.jsx(u.Fragment, {
        children:
          n != null
            ? u.jsx(r("GeoText.react"), { display: "block", children: n })
            : null,
      });
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K(e) {
      var t = e.connectionMethod,
        n = e.dataSourceType,
        o = e.eventName,
        a = e.type,
        i = e.useAdvancedMatching,
        l = null,
        c = null,
        d = u.jsx(r("GeoBaseText.react"), {
          color: "value",
          display: "inline",
          size: "value",
          weight: "bold",
          children: o,
        });
      switch (n) {
        case "PIXEL":
          t === 2
            ? (l = s._(
                /*BTDS*/ "You can update your Conversion API event custom data parameters to remove the potentially violating information from your events. View the affected URLs to get a snapshot of where these events are being detected, then update the Conversion API code to stop the parameters being sent with the events.",
              ))
            : (l = s._(
                /*BTDS*/ "You can update your {event_name_section} event custom data parameters to remove the potentially violating information. View the affected URLs to get a snapshot of where these events are being detected, then update the pixel code to stop these parameters being sent with the events.",
                [s._param("event_name_section", d)],
              ));
          break;
        case "APP_EVENT":
          l = s._(
            /*BTDS*/ "You can update your app event parameters to remove the potentially violating information from being sent. Review which events contain potentially violating parameters, then find them in your app code and remove the parameters.",
          );
          break;
        case "DATA_SET":
          l = s._(
            /*BTDS*/ "You can update your offline event parameters to remove the potentially violating information from being sent. Review which events contain potentially violating parameters, then find them in your manual upload spreadsheet or API code and remove the parameters.",
          );
          break;
      }
      return (
        (c = q(n, a, i)),
        u.jsxs(u.Fragment, {
          children: [
            l != null
              ? u.jsx(r("GeoText.react"), { display: "block", children: l })
              : null,
            c != null
              ? u.jsx(r("GeoText.react"), { display: "block", children: c })
              : null,
            u.jsx(r("GeoText.react"), { display: "block", children: W(n, t) }),
          ],
        })
      );
    }
    K.displayName = K.name + " [from " + i.id + "]";
    var Q = s._(/*BTDS*/ "Update your event name");
    function X(e) {
      var t = e.connectionMethod,
        n = e.dataSourceType,
        o = null;
      switch (n) {
        case "PIXEL":
          t !== 2
            ? (o = s._(
                /*BTDS*/ "You can update your pixel event names to remove the potentially violating information from your events. View the affected URLs to get a snapshot of where these events are being detected, then update the pixel code on your website to change the event name. You should discuss this with your website manager.",
              ))
            : (o = s._(
                /*BTDS*/ "You can update your Conversion API event names to remove the potentially violating information from your events. View the affected URLs to get a snapshot of where these events are being detected, then update the Conversion API code to change the event name. You should discuss this with your website manager.",
              ));
          break;
        case "APP_EVENT":
          o = s._(
            /*BTDS*/ "You can update your app event names to remove the potentially violating information from being sent. You'll need to find them in your app code and change the event name. You should discuss this with your app developer.",
          );
          break;
      }
      return o != null
        ? u.jsx(r("GeoText.react"), { display: "block", children: o })
        : null;
    }
    X.displayName = X.name + " [from " + i.id + "]";
    function Y(e) {
      var t = e.connectionMethod,
        n = e.dataSourceType,
        o = e.type,
        a = e.useAdvancedMatching,
        i = null,
        l = u.jsx(r("GeoBaseText.react"), {
          color: "value",
          display: "inline",
          size: "value",
          weight: "bold",
          children: _(o),
        });
      switch (n) {
        case "PIXEL":
          t === 2
            ? (i = s._(
                /*BTDS*/ "You can update your event names to remove {type_name} from your event. View the affected URLs to get a snapshot of where these events are being detected, then update your Conversion API code to change the event name.",
                [s._param("type_name", l)],
              ))
            : (i = s._(
                /*BTDS*/ "You can update your event names to remove {type_name} from your event. View the affected URLs to get a snapshot of where these events are being detected, then update the pixel code on your website to change the event name.",
                [s._param("type_name", l)],
              ));
          break;
        case "APP_EVENT":
          i = s._(
            /*BTDS*/ "You can update your app event names to remove {type_name} from your event. You'll need to find them in your app code and change the event name.",
            [s._param("type_name", l)],
          );
          break;
      }
      return u.jsxs(u.Fragment, {
        children: [
          i != null
            ? u.jsx(r("GeoText.react"), { display: "block", children: i })
            : null,
          u.jsx(r("GeoText.react"), { display: "block", children: q(n, o, a) }),
        ],
      });
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    var J = s._(/*BTDS*/ "See potential violations");
    function Z(e, t, n) {
      var o = f(e);
      return o == null
        ? null
        : u.jsx("div", {
            children:
              n === c
                ? u.jsx(r("GeoText.react"), { display: "inline", children: o })
                : u.jsx(r("GeoText.react"), {
                    display: "inline",
                    children: s._(/*BTDS*/ "{locationName}: {=m3}", [
                      s._param("locationName", o),
                      s._implicitParam(
                        "=m3",
                        u.jsx("b", {
                          children: s._(/*BTDS*/ "{parameterKey}", [
                            s._param("parameterKey", t),
                          ]),
                        }),
                      ),
                    ]),
                  }),
          });
    }
    Z.displayName = Z.name + " [from " + i.id + "]";
    function ee(e) {
      switch (e) {
        case r("SensitiveContextEnum").APP_CUSTOM_DATA:
        case r("SensitiveContextEnum").OFFLINE_CUSTOM_DATA:
        case r("SensitiveContextEnum").ONSITE_CUSTOM_DATA:
        case r("SensitiveContextEnum").PIXEL_CUSTOM_DATA:
        case r("SensitiveContextEnum").PLACE_CUSTOM_DATA:
          return z;
        case r("SensitiveContextEnum").APP_EVENT_NAME:
        case r("SensitiveContextEnum").OFFLINE_EVENT_NAME:
        case r("SensitiveContextEnum").PIXEL_EVENT_NAME:
        case r("SensitiveContextEnum").PLACE_EVENT_NAME:
          return Q;
        case r("SensitiveContextEnum").ONSITE_URL_PARAMS:
        case r("SensitiveContextEnum").PIXEL_URL_PARAMS:
        case r("SensitiveContextEnum").PLACE_URL_PARAMS:
        case r("SensitiveContextEnum").ONSITE_URL_PATH:
        case r("SensitiveContextEnum").PIXEL_URL_PATH:
        case r("SensitiveContextEnum").PLACE_URL_PATH:
          return V;
        default:
      }
      throw r("err")(
        "No recommended action title available for location: %s",
        e,
      );
    }
    function te(e) {
      var t = e.connectionMethod,
        n = e.dataSourceType,
        o = e.sensitiveDataInfo,
        a = e.useAdvancedMatching,
        i = o.category,
        l = o.eventName,
        s = o.location,
        u = o.type;
      switch (s) {
        case r("SensitiveContextEnum").APP_CUSTOM_DATA:
        case r("SensitiveContextEnum").OFFLINE_CUSTOM_DATA:
        case r("SensitiveContextEnum").ONSITE_CUSTOM_DATA:
        case r("SensitiveContextEnum").PIXEL_CUSTOM_DATA:
        case r("SensitiveContextEnum").PLACE_CUSTOM_DATA:
          return i === 5 || i === 6
            ? j(n, t)
            : i === 1
              ? K({
                  connectionMethod: t,
                  dataSourceType: n,
                  eventName: l,
                  type: u,
                  useAdvancedMatching: a,
                })
              : null;
        case r("SensitiveContextEnum").APP_EVENT_NAME:
        case r("SensitiveContextEnum").OFFLINE_EVENT_NAME:
        case r("SensitiveContextEnum").PIXEL_EVENT_NAME:
        case r("SensitiveContextEnum").PLACE_EVENT_NAME:
          return i === 5 || i === 6
            ? X({ connectionMethod: t, dataSourceType: n })
            : i === 1
              ? Y({
                  connectionMethod: t,
                  dataSourceType: n,
                  type: u,
                  useAdvancedMatching: a,
                })
              : null;
        case r("SensitiveContextEnum").ONSITE_URL_PARAMS:
        case r("SensitiveContextEnum").PIXEL_URL_PARAMS:
        case r("SensitiveContextEnum").PLACE_URL_PARAMS:
        case r("SensitiveContextEnum").ONSITE_URL_PATH:
        case r("SensitiveContextEnum").PIXEL_URL_PATH:
        case r("SensitiveContextEnum").PLACE_URL_PATH:
          return i === 5 || i === 6
            ? H(t)
            : i === 1
              ? G({
                  connectionMethod: t,
                  dataSourceType: n,
                  type: u,
                  useAdvancedMatching: a,
                })
              : null;
        default:
      }
      return null;
    }
    te.displayName = te.name + " [from " + i.id + "]";
    function ne() {
      return s._(/*BTDS*/ "Review potentially prohibited data");
    }
    function re() {
      return s._(
        /*BTDS*/ "Information in your data may go against Meta's terms and policies",
      );
    }
    var oe = "https://www.facebook.com/legal/technology_terms";
    function ae() {
      return s._(
        /*BTDS*/ "We have detected potentially prohibited data that may not comply with our {=m2} and policies.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              href: oe,
              showUnderline: "always",
              target: "_blank",
              children: s._(/*BTDS*/ "terms"),
            }),
          ),
        ],
      );
    }
    ae.displayName = ae.name + " [from " + i.id + "]";
    function ie() {
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("GeoText.react"), {
            display: "block",
            children: s._(
              /*BTDS*/ "Please immediately review the data you're sharing and update your setup to only share data which complies with our terms.",
            ),
          }),
          u.jsx("br", {}),
          u.jsx(r("GeoText.react"), {
            display: "block",
            children: s._(
              /*BTDS*/ "Sharing this type of information may cause actions from Meta, including but not limited to data restrictions and suspension of your account.",
            ),
          }),
        ],
      });
    }
    ie.displayName = ie.name + " [from " + i.id + "]";
    function le() {
      var e,
        t,
        n = ae(),
        a = (t = o("SignalsHomeHelpContent")).getHelpContentURL(
          t.Entries.TROUBLESHOOOT_BUSINESS_TOOLS,
        ),
        i = ce("prohibited information", a),
        l = s._(
          /*BTDS*/ "As a reminder, you may not send us potentially {troubleshooting_business_tools_link} about people, including health information, financial information, and information defined as sensitive under applicable law. You are responsible for ensuring you are not sending any prohibited data to Meta.",
          [s._param("troubleshooting_business_tools_link", i)],
        ),
        c = ce("terms", oe),
        d = t.getHelpContentURL(t.Entries.TROUBLESHOOT_DATA_POLICY_VIOLATIONS),
        m = ce("article", d),
        p = s._(
          /*BTDS*/ "Please review our {troubleshooting_learn_more_link} on troubleshooting Meta Business Tools data violations and ensure your integration does not send prohibited data or data that has previously been filtered. You can help protect people\u2019s privacy and your advertising value by ensuring you are sending data that complies with our {terms_learn_more_link}.",
          [
            s._param("troubleshooting_learn_more_link", m),
            s._param("terms_learn_more_link", c),
          ],
        ),
        _ = s._(
          /*BTDS*/ "As a precaution, this data has been filtered, isn\u2019t stored in our ad systems and you aren\u2019t able to view or use it. Any ads optimizing on events with potentially prohibited data, including those used in custom audiences or custom conversions, may not perform as expected.",
        );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx((e = r("GeoText.react")), { display: "block", children: n }),
          u.jsx("br", {}),
          u.jsx(e, { display: "block", children: l }),
          u.jsx("br", {}),
          u.jsx(e, { display: "block", children: p }),
          u.jsx("br", {}),
          u.jsx(e, { display: "block", children: _ }),
        ],
      });
    }
    le.displayName = le.name + " [from " + i.id + "]";
    function se() {
      var e = o("SignalsHomeHelpContent").getHelpContentURL(
          o("SignalsHomeHelpContent").Entries
            .TROUBLESHOOT_DATA_POLICY_VIOLATIONS,
        ),
        t = ce("intergration", e),
        n = s._(
          /*BTDS*/ "Events and parameters with potentially prohibited data",
        ),
        a = s._(
          /*BTDS*/ "Please review the recommended fixes for each of these events and check your {trouble shooting link} to ensure you are not sending any prohibited data to Meta.",
          [s._param("trouble shooting link", t)],
        );
      return u.jsxs(r("GeoFlexbox.react"), {
        direction: "column",
        children: [
          u.jsx(r("GeoHeading.react"), {
            level: 3,
            xstyle: r("geoMargin").bottom12,
            children: n,
          }),
          u.jsx(r("GeoText.react"), { children: a }),
        ],
      });
    }
    se.displayName = se.name + " [from " + i.id + "]";
    function ue(e) {
      var t = s._(
        /*BTDS*/ '_j{"*":"event parameters that may go against Meta Business Tools Terms: {numParameters}","_1":"Parameter that may go against Meta Business Tools Terms: {numParameters}"}',
        [s._plural(e), s._param("numParameters", e)],
      );
      return u.jsx(r("GeoFlexbox.react"), {
        direction: "column",
        children: u.jsx(r("GeoHeading.react"), {
          level: 3,
          xstyle: r("geoMargin").bottom12,
          children: t,
        }),
      });
    }
    ue.displayName = ue.name + " [from " + i.id + "]";
    function ce(e, t) {
      return u.jsx(r("GeoLink.react"), {
        display: "inline",
        href: t,
        showUnderline: "always",
        target: "_blank",
        children: e,
      });
    }
    ((ce.displayName = ce.name + " [from " + i.id + "]"),
      (l.REMOVED_STR = c),
      (l.REMOEVD_STR_LABEL = d),
      (l.SEE_DETAILS_ICON = o(
        "meta-brand-list-magnifying-glass-filled-16",
      ).metaBrandListMagnifyingGlassFilled16),
      (l.getCanUseAdvancedMatching = p),
      (l.getSensitiveDataLocationName = f),
      (l.getTitle = h),
      (l.acknowledgeableGuidanceTitle = y),
      (l.acknowledgeableShortDescription = C),
      (l.getShortDescription = b),
      (l.getDescription = v),
      (l.getAcknowledgeableDescription = S),
      (l.getSolutionDescription = L),
      (l.getAcknowledgementStatusText = E),
      (l.EVENT_COLUMN_LABEL = k),
      (l.EVENT_COLUMN_TOOLTIP = I),
      (l.LOCATION_COLUMN_LABEL = T),
      (l.LOCATION_COLUMN_TOOLTIP = D),
      (l.LAST_DETECTED_COLUMN_LABEL = x),
      (l.REVIEW_DETAILS_BUTTON_LABEL = $),
      (l.EVENT_PARMETERS_COLUMN_LABEL = P),
      (l.EVENT_NAME_COLUMN_LABEL = N),
      (l.DETECTED_TIME_COLUMN_LABEL = M),
      (l.FIRST_DETECTED_EVENTS_COLUMN_LABEL = w),
      (l.FIRST_DETECTED_COLUMN_TOOLTIP = A),
      (l.STATUS_COLUMN_LABEL = F),
      (l.REVIEW_DATA_SAMPLE_COLUMN_LABEL = O),
      (l.GO_TO_PAGES_BUTTON_LABEL = B),
      (l.getViolationDetailsDescription = U),
      (l.EXPANDING_LABEL = J),
      (l.getLocationCellContent = Z),
      (l.getSensitiveDataUpdateTitle = ee),
      (l.getSensitiveDataUpdateDescription = te),
      (l.getTitleForConsolidatedMD = ne),
      (l.getTitleForAcknowledgeableConsolidatedMD = re),
      (l.getDescriptionForAcknowledgeableConsolidatedMD = ie),
      (l.getDescriptionForConsolidatedMD = le),
      (l.getSolutionDescriptionForConsolidatedMD = se),
      (l.getSolutionDescriptionForAcknowledgeableConsolidatedMD = ue));
  },
  226,
);
