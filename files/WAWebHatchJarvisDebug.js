__d(
  "WAWebHatchJarvisDebug",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        "https://static.whatsapp.net/bloks_asset?cat=business_directory_icon&id=ic_apparel_xxhdpi",
      u = new Map([
        [
          "markdown",
          function () {
            return d(
              "# Sample heading\n\nThis is a **bold** and *italic* response with `inline code`.\n\n- First bullet\n- Second bullet\n- Third bullet",
            );
          },
        ],
        [
          "code",
          function () {
            return d(
              'Here is a Kotlin snippet:\n\n```kotlin\nfun greet(name: String): String {\n  return "Hello, $name!"\n}\n```',
            );
          },
        ],
        [
          "table",
          function () {
            return d(
              "Comparison table:\n\n| Feature | Supported | Notes |\n| --- | --- | --- |\n| Markdown | Yes | Headings, lists, bold |\n| Tables | Yes | GitHub-flavored |\n| Diagrams | No | Future work |",
            );
          },
        ],
        [
          "image",
          function () {
            return d("Here is a cat:\n\n![cat](sandbox://workspace/cat.png)", {
              "sandbox://workspace/cat.png": p("cat.png", "image/png"),
            });
          },
        ],
        [
          "image_grid",
          function () {
            return d(
              [1, 2, 3, 4, 5]
                .map(function (e) {
                  return (
                    "![shot " + e + "](sandbox://workspace/shot-" + e + ".png)"
                  );
                })
                .join("\n\n"),
              Object.fromEntries(
                [1, 2, 3, 4, 5].map(function (e) {
                  return [
                    "sandbox://workspace/shot-" + e + ".png",
                    p("shot-" + e + ".png", "image/png"),
                  ];
                }),
              ),
            );
          },
        ],
        [
          "file",
          function () {
            return d(
              "Attached report:\n\n![report.pdf](sandbox://workspace/report.pdf)",
              {
                "sandbox://workspace/report.pdf": p(
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
            return d(
              "Voice clip:\n\n![voice.opus](sandbox://workspace/voice.opus)",
              {
                "sandbox://workspace/voice.opus": p("voice.opus", "audio/ogg"),
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
                  _("https://example.com/docs", "Docs site"),
                  _("https://example.com/spec", "Spec page"),
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
            return m("option", {
              custom_input: { placeholder: "Type your own" },
              options: ["Book a table", "Find a recipe"],
            });
          },
        ],
        [
          "link_card",
          function () {
            return m("external_link", {
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
            return m("generic_list", {
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
            return m("text_with_button", {
              button: {
                label: "Open the guide",
                url: "https://example.com/guide",
              },
              text: "Your guide is ready.",
            });
          },
        ],
        [
          "unknown_kind",
          function () {
            return m(
              "not_a_real_kind",
              {},
              "Fallback text for an unknown widget.",
            );
          },
        ],
        [
          "unsupported_version",
          function () {
            return d("If you see this, the version gate failed.");
          },
        ],
      ]);
    function c(t) {
      var n;
      t === void 0 && (t = "markdown");
      var a = u.get(t);
      if (a == null)
        throw r("err")(
          '[hatchInjectJarvisReply] unknown fixture "' +
            t +
            '", expected one of: ' +
            Array.from(u.keys()).join(", "),
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
        c = "DEBUG_JARVIS_" + Date.now().toString(36);
      return (
        i.msgs.add(
          new (o("WAWebMsgModel").Msg)({
            body: l,
            from: i.id,
            id: new (r("WAWebMsgKey"))({ fromMe: !1, id: c, remote: i.id }),
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
            to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
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
        c
      );
    }
    ((c.doc =
      "Stage a Muse reply with a Jarvis envelope in the Muse chat. Args: (fixtureName?) \u2014 one of " +
      Array.from(u.keys()).join(", ") +
      "; defaults to markdown."),
      (c.paramsToExecute = ["markdown"]));
    function d(e, t) {
      return {
        file_metadata: t,
        stream_event_row: {
          display_text: e,
          display_text_ready: !0,
          event_name: "message.assistant",
        },
      };
    }
    function m(e, t, n) {
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
    function p(e, t) {
      return { filename: e, mime_type: t, url: s };
    }
    function _(e, t) {
      return { kind: "citation", label: t, uri: e };
    }
    var f = { hatchInjectJarvisReply: c };
    l.default = f;
  },
  98,
);
