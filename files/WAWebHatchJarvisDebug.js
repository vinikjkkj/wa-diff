__d(
  "WAWebHatchJarvisDebug",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebHatchPeerInviteLocalState",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        "https://static.whatsapp.net/bloks_asset?cat=business_directory_icon&id=ic_apparel_xxhdpi",
      c =
        "Hey Ana, Sofia Andersson wants to connect with you here. This will let me talk and share with their Muse, Hazel. I won't share anything without your direction or approval.",
      d = [1, 2, 3, 4, 5],
      m = new Map([
        [
          "markdown",
          function () {
            return _(
              "# Sample heading\n\nThis is a **bold** and *italic* response with `inline code`.\n\n- First bullet\n- Second bullet\n- Third bullet",
            );
          },
        ],
        [
          "code",
          function () {
            return _(
              'Here is a Kotlin snippet:\n\n```kotlin\nfun greet(name: String): String {\n  return "Hello, $name!"\n}\n```',
            );
          },
        ],
        [
          "table",
          function () {
            return _(
              "Comparison table:\n\n| Feature | Supported | Notes |\n| --- | --- | --- |\n| Markdown | Yes | Headings, lists, bold |\n| Tables | Yes | GitHub-flavored |\n| Diagrams | No | Future work |",
            );
          },
        ],
        [
          "image",
          function () {
            return _("Here is a cat:\n\n![cat](sandbox://workspace/cat.png)", {
              "sandbox://workspace/cat.png": g("cat.png", "image/png"),
            });
          },
        ],
        [
          "image_grid",
          function () {
            return _(
              d
                .map(function (e) {
                  return (
                    "![shot " + e + "](sandbox://workspace/shot-" + e + ".png)"
                  );
                })
                .join("\n\n"),
              Object.fromEntries(
                d.map(function (e) {
                  return [
                    "sandbox://workspace/shot-" + e + ".png",
                    g("shot-" + e + ".png", "image/png"),
                  ];
                }),
              ),
            );
          },
        ],
        [
          "file",
          function () {
            return _(
              "Attached report:\n\n![report.pdf](sandbox://workspace/report.pdf)",
              {
                "sandbox://workspace/report.pdf": g(
                  "Quarterly report.pdf",
                  "application/pdf",
                ),
              },
            );
          },
        ],
        [
          "audio",
          function () {
            return _(
              "Voice clip:\n\n![voice.opus](sandbox://workspace/voice.opus)",
              {
                "sandbox://workspace/voice.opus": g("voice.opus", "audio/ogg"),
              },
            );
          },
        ],
        [
          "citations",
          function () {
            return {
              stream_event_row: {
                display_text:
                  "Per [the docs](https://example.com/docs) and [the spec](https://example.com/spec), the Jarvis renderer supports inline links.",
                event_name: "message.assistant",
                resources: [
                  h("https://example.com/docs", "Docs site"),
                  h("https://example.com/spec", "Spec page"),
                ],
              },
            };
          },
        ],
        [
          "inline_options",
          function () {
            return {
              inline_widgets: [
                {
                  data: {
                    button_style: "dotted_lines",
                    options: ["Orion", "Astro", "Muse"],
                  },
                  id: "debug-name-options",
                  kind: "option",
                },
              ],
              stream_event_row: {
                display_text: "What would you like to call me?",
                display_text_ready: !0,
                event_name: "message.assistant",
              },
            };
          },
        ],
        [
          "option_widget",
          function () {
            return f("option", {
              custom_input: { placeholder: "Type your own" },
              options: ["Book a table", "Find a recipe"],
            });
          },
        ],
        [
          "link_card",
          function () {
            return f("external_link", {
              description: "Plan your trip with day-by-day suggestions.",
              site_name: "Example Travel",
              title: "Three days in Lisbon",
              url: "https://example.com/lisbon",
            });
          },
        ],
        [
          "list",
          function () {
            return f("generic_list", {
              items: [
                {
                  data: { url: "https://example.com/a" },
                  subtitle: "Open until 10 PM",
                  title: "Cafe A",
                  type: "link",
                },
                {
                  data: { url: "https://example.com/b" },
                  subtitle: "Open until 9 PM",
                  title: "Cafe B",
                  type: "link",
                },
              ],
              title: "Cafes near you",
            });
          },
        ],
        [
          "text_with_button",
          function () {
            return f("text_with_button", {
              button: {
                label: "Open the guide",
                url: "https://example.com/guide",
              },
              text: "Your guide is ready.",
            });
          },
        ],
        [
          "pairing_accept_request",
          function () {
            return f(
              "pairing_launcher",
              {
                accepted: !1,
                action: "accept",
                body: c,
                button_label: "Connect",
                delivery_id: "debug-delivery-1",
                headline: "Connection request",
                invitation_url: "https://muse.ai/peer/accept#DebugInvite_0001",
                muse_id: "debug-peer-muse",
                muse_name: "Hazel",
                peer_muse_avatar: null,
                person_name: "Sofia Andersson",
                title: null,
                version: 1,
              },
              c + " Open WhatsApp on a newer version to connect.",
            );
          },
        ],
        [
          "unknown_kind",
          function () {
            return f(
              "not_a_real_kind",
              {},
              "Fallback text for an unknown widget.",
            );
          },
        ],
        [
          "unsupported_version",
          function () {
            return _("If you see this, the version gate failed.");
          },
        ],
      ]);
    function p(t) {
      var n;
      t === void 0 && (t = "markdown");
      var a = m.get(t);
      if (a == null)
        throw r("err")(
          '[hatchInjectJarvisReply] unknown fixture "' +
            t +
            '", expected one of: ' +
            Array.from(m.keys()).join(", "),
        );
      var i = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      );
      if (i == null)
        throw r("err")("[hatchInjectJarvisReply] no Muse chat on this browser");
      var l = 'Jarvis fixture "' + t + '" (sections fallback)',
        s = {
          __typename: "XMSGGenAIUnifiedResponse",
          passthrough_payload: {
            __typename: "XMSGGenAIJarvisPayload",
            envelope_schema_version: t === "unsupported_version" ? "99" : "1",
            jarvis_envelope: (n = JSON.stringify(a())) != null ? n : "",
          },
          response_id: "debug-jarvis-" + Date.now().toString(36),
          sections: [
            {
              __typename: "GenAIUnifiedResponseSection",
              view_model: {
                __typename: "GenAISingleLayoutViewModel",
                primitive: {
                  __typename: "GenAIMarkdownTextUXPrimitive",
                  text: l,
                },
              },
            },
          ],
        },
        u = "DEBUG_JARVIS_" + Date.now().toString(36);
      return (
        i.msgs.add(
          new (o("WAWebMsgModel").Msg)({
            body: l,
            from: i.id,
            id: new (r("WAWebMsgKey"))({ fromMe: !1, id: u, remote: i.id }),
            richResponse: {
              fragments: [
                {
                  text: l,
                  type: o("WAWebRichResponse.flow").RichResponseFragmentType
                    .Text,
                },
              ],
              parseState: o("WAWebRichResponse.flow").RichResponseParseState
                .Parsed,
              type: o("WAWebRichResponse.flow").ParsedRichResponseType.Standard,
            },
            t: o("WATimeUtils").unixTime(),
            to: o("WAWebUserUtils").getMeUserOrThrow(),
            type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
            unifiedResponse: s,
          }),
        ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[hatchInjectJarvisReply] staged ",
              "",
            ])),
          t,
        ),
        u
      );
    }
    ((p.doc =
      "Stage a Muse reply with a Jarvis envelope in the Muse chat. Args: (fixtureName?) \u2014 one of " +
      Array.from(m.keys()).join(", ") +
      "; defaults to markdown."),
      (p.paramsToExecute = ["markdown"]));
    function _(e, t) {
      return {
        file_metadata: t,
        stream_event_row: {
          display_text: e,
          display_text_ready: !0,
          event_name: "message.assistant",
        },
      };
    }
    function f(e, t, n) {
      return {
        stream_event_row: {
          display_text: "",
          event_name: "delta.presentation",
          payload: {
            data: t,
            fallback_text: n != null ? n : "Fallback text for " + e + ".",
            id: "debug-" + e,
            kind: e,
          },
        },
      };
    }
    function g(e, t) {
      return { filename: e, mime_type: t, url: u };
    }
    function h(e, t) {
      return { kind: "citation", label: t, uri: e };
    }
    function y() {
      (o("WAWebHatchPeerInviteLocalState").clearHatchPeerInviteLocalState(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[hatchResetPeerConnect] cleared the connect intro and card states",
            ])),
        ));
    }
    y.doc =
      "Show the Muse connect intro again and reopen every connection request card on this device.";
    var C = { hatchInjectJarvisReply: p, hatchResetPeerConnect: y };
    l.default = C;
  },
  98,
);
