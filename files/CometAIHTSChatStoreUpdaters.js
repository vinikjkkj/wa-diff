__d(
  "CometAIHTSChatStoreUpdaters",
  [
    "CometComposedText3DUpdaters",
    "CometRelay",
    "CometRelay3DUtils",
    "JSResourceForInteraction",
    "Promise",
    "ServerTime",
    "SupportConversationLogger.react",
    "justknobx",
    "relay-runtime",
    "stripTopicMenuRoutingValue",
    "uuidv4",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n) {
      var r = o("CometRelay").ConnectionHandler.createEdge(
        e,
        t,
        n,
        "CometAIChatMessageThreadMessagesEdge",
      );
      o("CometRelay").ConnectionHandler.insertEdgeAfter(t, r);
    }
    function c(e) {
      var t;
      return (t = r("stripTopicMenuRoutingValue")(e)) != null ? t : "";
    }
    var d = "CometAIHTSChatMessageContentV2_message_composed_text_v2",
      m = "CometAIHTSMarkdownAttachment_data_composed_text_v2",
      p = "markdown_attachment_dedup_key",
      _ = (s = r("JSResourceForInteraction"))(
        "cometComposedTextV2RootNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      f = s("cometComposedTextV2RootNodeRelay").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      g = s(
        "cometComposedTextV2ParagraphNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      h = s("cometComposedTextV2ParagraphNodeRelay").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      y = s(
        "cometComposedTextV2TextNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      C = s("cometComposedTextV2TextNodeRelay").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      b = s(
        "cometAIHTSChatComposedTextV2MarketplaceAppealNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      v = s("cometAIHTSChatComposedTextV2MarketplaceAppealNodeRelay").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      S = s(
        "cometAIHTSChatComposedTextV2SelectImpersonatorNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      R = s("cometAIHTSChatComposedTextV2SelectImpersonatorNodeRelay").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      L = s(
        "cometAIHTSChatComposedTextV2IGSelectImpersonatorNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      E = s(
        "cometAIHTSChatComposedTextV2IGSelectImpersonatorNodeRelay",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      k = s(
        "cometAIHTSChatComposedTextV2DirectLinkNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      I = s("cometAIHTSChatComposedTextV2DirectLinkNodeRelay").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      T = s(
        "cometAIHTSChatComposedTextV2AccountSettingDeeplinkNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      D = s(
        "cometAIHTSChatComposedTextV2AccountSettingDeeplinkNodeRelay",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      x = s(
        "cometAIHTSChatComposedTextV2ReportSubmissionNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      $ = s("cometAIHTSChatComposedTextV2ReportSubmissionNodeRelay").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      P = s(
        "cometAIHTSChatComposedTextV2ReporterAppealSubmissionNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      N = s(
        "cometAIHTSChatComposedTextV2ReporterAppealSubmissionNodeRelay",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      M = s(
        "cometAIHTSChatComposedTextV2UpdateContextVariablesNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      w = s(
        "cometAIHTSChatComposedTextV2UpdateContextVariablesNodeRelay",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      A = s("CometAIHTSMarkdownAttachment_data$normalization.graphql").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      F = s("CometAIHTSMarkdownAttachment.react").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      O = s(
        "cometAIHTSChatComposedTextV2ReportedContentNodeRelay_node$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      B = s("cometAIHTSChatComposedTextV2ReportedContentNodeRelay").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      W = s(
        "CometAIHTSUnifiedResponseAttachment_data$normalization.graphql",
      ).__setRef("CometAIHTSChatStoreUpdaters"),
      q = s("CometAIHTSUnifiedResponseAttachment.react").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      U = s("CometAIHTSOptionsMessage_data$normalization.graphql").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      V = s("CometAIHTSOptionsMessage.react").__setRef(
        "CometAIHTSChatStoreUpdaters",
      ),
      H = [_, f, g, h, y, C, O, B],
      G = null;
    function z() {
      return (
        G != null ||
          (G = (e || (e = n("Promise"))).all(
            H.map(function (e) {
              return e.load().catch(function () {
                return null;
              });
            }),
          )),
        G
      );
    }
    function j() {
      return H.every(function (e) {
        return e.getModuleIfRequired() != null;
      });
    }
    function K(e, t) {
      var n = [],
        a = [];
      for (var i of t.split("\n\n").filter(function (e) {
        return e !== "";
      })) {
        var l,
          s = r("uuidv4")(),
          u = r("uuidv4")();
        n.push(u);
        var c = e
            .create(
              (l = o("relay-runtime")).generateUniqueClientID(),
              "ComposedTextTextNode",
            )
            .setValue(s, "key")
            .setValue(i, "text")
            .setValue(0, "format"),
          m = e
            .create(l.generateUniqueClientID(), "ComposedTextTextNodeRenderer")
            .setLinkedRecord(c, "node");
        o("CometRelay3DUtils").setRelay3DValue(m, d, y, C);
        var p = e
            .create(l.generateUniqueClientID(), "ComposedTextNode")
            .setValue(s, "key"),
          _ = e
            .create(l.generateUniqueClientID(), "ComposedTextParagraphNode")
            .setValue(u, "key")
            .setLinkedRecords([p], "children"),
          f = e
            .create(
              l.generateUniqueClientID(),
              "ComposedTextParagraphNodeRenderer",
            )
            .setLinkedRecord(_, "node");
        (o("CometRelay3DUtils").setRelay3DValue(f, d, g, h), a.push(f, m));
      }
      return { paragraphKeys: n, renderers: a };
    }
    function Q(e, t, n) {
      var r = e.get(t);
      if (r) {
        var o = e.get(n.messageID);
        o == null &&
          ((o = e.create(n.messageID, "XFBCometAIHTSChatMessage")),
          te(e, o, n, r),
          u(e, r, o));
      }
    }
    function X(e, t, n) {
      var a = e.get(t);
      if (a) {
        var i = e.get(n.messageID);
        if (i == null) {
          i = e
            .create(n.messageID, "XFBCometAIHTSChatMessage")
            .setValue(n.messageID, "id")
            .setValue(
              Math.floor(o("ServerTime").getMillis() / 1e3),
              "timestamp",
            )
            .setValue(c(n.text), "text")
            .setValue(void 0, "streaming_state")
            .setValue(n.userType, "user");
          var l = c(n.text).split("\n\n"),
            s = [],
            m = [];
          for (var p of l) {
            var b,
              v = r("uuidv4")(),
              S = r("uuidv4")();
            s.push(S);
            var R = e
                .create(
                  (b = o("relay-runtime")).generateUniqueClientID(),
                  "ComposedTextTextNode",
                )
                .setValue(v, "key")
                .setValue(p, "text")
                .setValue(0, "format"),
              L = e
                .create(
                  b.generateUniqueClientID(),
                  "ComposedTextTextNodeRenderer",
                )
                .setLinkedRecord(R, "node");
            o("CometRelay3DUtils").setRelay3DValue(L, d, y, C);
            var E = e
                .create(b.generateUniqueClientID(), "ComposedTextNode")
                .setValue(v, "key"),
              k = e
                .create(b.generateUniqueClientID(), "ComposedTextParagraphNode")
                .setValue(S, "key")
                .setLinkedRecords([E], "children"),
              I = e
                .create(
                  b.generateUniqueClientID(),
                  "ComposedTextParagraphNodeRenderer",
                )
                .setLinkedRecord(k, "node");
            (o("CometRelay3DUtils").setRelay3DValue(I, d, g, h), m.push(I, L));
          }
          var T = r("uuidv4")(),
            D = s.map(function (t) {
              return e
                .create(
                  o("relay-runtime").generateUniqueClientID(),
                  "ComposedTextNode",
                )
                .setValue(t, "key");
            }),
            x = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "ComposedTextRootNode",
              )
              .setValue(T, "key")
              .setLinkedRecords(D, "children"),
            $ = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "ComposedTextRootNodeRenderer",
              )
              .setLinkedRecord(x, "node");
          (o("CometRelay3DUtils").setRelay3DValue($, d, _, f),
            i.setLinkedRecord(
              e
                .create(
                  o("relay-runtime").generateClientID(
                    n.messageID,
                    "composed_text_v2",
                  ),
                  "ComposedTextInstance",
                )
                .setLinkedRecords([$].concat(m), "nodes_js"),
              "composed_text_v2",
            ),
            u(e, a, i));
        }
      }
    }
    function Y(e, t, n) {
      var r = e.get(t);
      if (r) {
        var o = e.get(n.messageID);
        if (o != null) {
          ne(e, r, o, n);
          return;
        }
        Q(e, t, n);
      }
    }
    function J(e, t, n) {
      var r = n.complianceData,
        o = r.body,
        a = r.cta,
        i = r.url;
      Q(e, t, {
        messageID: n.messageID,
        text: o + " [" + a + "](" + i + ")",
        userType: n.userType,
      });
    }
    function Z(e, t, n) {
      var a,
        i,
        l,
        s = e.get(t);
      if (s) {
        var u = e.get(n.messageID);
        if (u == null) {
          u = e
            .create(n.messageID, "XFBCometAIHTSChatMessage")
            .setValue(n.messageID, "id")
            .setValue(
              Math.floor(o("ServerTime").getMillis() / 1e3),
              "timestamp",
            )
            .setValue(c(n.text), "text")
            .setValue(void 0, "streaming_state")
            .setValue(n.userType, "user");
          var m = c(n.text).split("\n\n"),
            p = [],
            S = [];
          for (var R of m) {
            var L,
              E = r("uuidv4")(),
              k = r("uuidv4")();
            p.push(k);
            var I = e
                .create(
                  (L = o("relay-runtime")).generateUniqueClientID(),
                  "ComposedTextTextNode",
                )
                .setValue(E, "key")
                .setValue(R, "text")
                .setValue(0, "format"),
              T = e
                .create(
                  L.generateUniqueClientID(),
                  "ComposedTextTextNodeRenderer",
                )
                .setLinkedRecord(I, "node");
            o("CometRelay3DUtils").setRelay3DValue(T, d, y, C);
            var D = e
                .create(L.generateUniqueClientID(), "ComposedTextNode")
                .setValue(E, "key"),
              x = e
                .create(L.generateUniqueClientID(), "ComposedTextParagraphNode")
                .setValue(k, "key")
                .setLinkedRecords([D], "children"),
              $ = e
                .create(
                  L.generateUniqueClientID(),
                  "ComposedTextParagraphNodeRenderer",
                )
                .setLinkedRecord(x, "node");
            (o("CometRelay3DUtils").setRelay3DValue($, d, g, h), S.push($, T));
          }
          var P = r("uuidv4")(),
            N = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "XFBHTSChatComposedTextMarketplaceAppealNode",
              )
              .setValue(P, "key")
              .setValue(n.appealData.listing_id, "listing_id")
              .setValue(n.appealData.url, "url")
              .setValue((a = n.appealData.name) != null ? a : null, "name")
              .setValue(
                (i = n.appealData.enforcement) != null ? i : null,
                "enforcement",
              )
              .setValue(
                (l = n.appealData.enforcement_time) != null ? l : null,
                "enforcement_time",
              ),
            M = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "XFBHTSChatComposedTextMarketplaceAppealNodeRenderer",
              )
              .setLinkedRecord(N, "node");
          o("CometRelay3DUtils").setRelay3DValue(M, d, b, v);
          var w = r("uuidv4")(),
            A = [].concat(
              p.map(function (t) {
                return e
                  .create(
                    o("relay-runtime").generateUniqueClientID(),
                    "ComposedTextNode",
                  )
                  .setValue(t, "key");
              }),
              [
                e
                  .create(
                    o("relay-runtime").generateUniqueClientID(),
                    "ComposedTextNode",
                  )
                  .setValue(P, "key"),
              ],
            ),
            F = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "ComposedTextRootNode",
              )
              .setValue(w, "key")
              .setLinkedRecords(A, "children"),
            O = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "ComposedTextRootNodeRenderer",
              )
              .setLinkedRecord(F, "node");
          (o("CometRelay3DUtils").setRelay3DValue(O, d, _, f),
            u.setLinkedRecord(
              e
                .create(
                  o("relay-runtime").generateClientID(
                    n.messageID,
                    "composed_text_v2",
                  ),
                  "ComposedTextInstance",
                )
                .setLinkedRecords([O].concat(S, [M]), "nodes_js"),
              "composed_text_v2",
            ));
          var B = o("CometRelay").ConnectionHandler.createEdge(
            e,
            s,
            u,
            "CometAIChatMessageThreadMessagesEdge",
          );
          o("CometRelay").ConnectionHandler.insertEdgeAfter(s, B);
        }
      }
    }
    function ee(e, t, n) {
      var a,
        i,
        l,
        s,
        m,
        p,
        g = e.get(t);
      if (g) {
        var h = e.get(n.messageID);
        if (h == null) {
          var y = c(n.text);
          h = e
            .create(n.messageID, "XFBCometAIHTSChatMessage")
            .setValue(n.messageID, "id")
            .setValue(
              Math.floor(o("ServerTime").getMillis() / 1e3),
              "timestamp",
            )
            .setValue(
              (a = n.reportedContentData.title) != null
                ? a
                : "Reported content",
              "text",
            )
            .setValue(void 0, "streaming_state")
            .setValue(n.userType, "user");
          var C = r("uuidv4")(),
            b = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "XFBHTSChatComposedTextReportedContentNode",
              )
              .setValue(C, "key")
              .setValue(n.reportedContentData.content_type, "content_type")
              .setValue(
                (i = n.reportedContentData.title) != null ? i : null,
                "title",
              )
              .setValue(
                (l = n.reportedContentData.subtitle) != null ? l : null,
                "subtitle",
              )
              .setValue(
                (s = n.reportedContentData.text) != null ? s : null,
                "text",
              )
              .setValue(
                (m = n.reportedContentData.image_url) != null ? m : null,
                "image_url",
              )
              .setValue(
                (p = n.reportedContentData.author_name) != null ? p : null,
                "author_name",
              ),
            v = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "XFBHTSChatComposedTextReportedContentNodeRenderer",
              )
              .setLinkedRecord(b, "node");
          o("CometRelay3DUtils").setRelay3DValue(v, d, O, B);
          var S = y === "" ? { paragraphKeys: [], renderers: [] } : K(e, y),
            R = S.paragraphKeys,
            L = S.renderers,
            E = r("uuidv4")(),
            k = [
              e
                .create(
                  o("relay-runtime").generateUniqueClientID(),
                  "ComposedTextNode",
                )
                .setValue(C, "key"),
            ].concat(
              R.map(function (t) {
                return e
                  .create(
                    o("relay-runtime").generateUniqueClientID(),
                    "ComposedTextNode",
                  )
                  .setValue(t, "key");
              }),
            ),
            I = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "ComposedTextRootNode",
              )
              .setValue(E, "key")
              .setLinkedRecords(k, "children"),
            T = e
              .create(
                o("relay-runtime").generateUniqueClientID(),
                "ComposedTextRootNodeRenderer",
              )
              .setLinkedRecord(I, "node");
          (o("CometRelay3DUtils").setRelay3DValue(T, d, _, f),
            h.setLinkedRecord(
              e
                .create(
                  o("relay-runtime").generateClientID(
                    n.messageID,
                    "composed_text_v2",
                  ),
                  "ComposedTextInstance",
                )
                .setLinkedRecords([T, v].concat(L), "nodes_js"),
              "composed_text_v2",
            ),
            u(e, g, h));
        }
      }
    }
    function te(e, t, n, r) {
      var a = c(n.text);
      if (
        (t
          .setValue(n.messageID, "id")
          .setValue(Math.floor(o("ServerTime").getMillis() / 1e3), "timestamp")
          .setValue(a, "text")
          .setValue(n.streamingState, "streaming_state")
          .setValue(n.streamingStateDisplayText, "sreaming_state_display_text")
          .setValue(n.userType, "user"),
        n.isHidden === !0 && t.setValue(!0, "is_hidden"),
        re(e, r, t, n.attachments),
        n.composedText != null)
      ) {
        var i = n.composedText.map(function (t) {
          return e.get(t.__id);
        });
        t.setLinkedRecords(i, "composed_text");
        return;
      }
      o("CometComposedText3DUpdaters").setPlainTextLinkedRecordV2({
        documentName: d,
        id: n.messageID,
        record: t,
        store: e,
        text: a,
      });
    }
    function ne(e, t, n, r) {
      (r.text != null && n.setValue(c(r.text), "text"),
        n
          .setValue(r.streamingState, "streaming_state")
          .setValue(r.streamingStateDisplayText, "sreaming_state_display_text")
          .setValue(r.userType, "user"),
        r.isHidden === !0 && n.setValue(!0, "is_hidden"),
        re(e, t, n, r.attachments));
      var o = r.text;
      if (o != null) {
        var a = n.getLinkedRecord("composed_text_v2");
        if (a != null) {
          var i = a.getLinkedRecords("nodes_js");
          if (i != null) {
            var l = c(o);
            for (var s of i)
              if (s != null && s.getType() === "ComposedTextTextNodeRenderer") {
                var u = s.getLinkedRecord("node");
                u != null && u.setValue(l, "text");
              }
          }
        }
      }
    }
    function re(e, t, n, r) {
      if (r != null) {
        var o = Re(t, n.getValue("id")),
          a = [];
        (r.forEach(function (t) {
          var n = t.type === "markdown_attachment" ? Ee(t) : null;
          if (!(n != null && ke(o, n))) {
            var r = t.type === "markdown_attachment" ? Se(e, t) : se(e, t);
            r != null && a.push(r);
          }
        }),
          n.setLinkedRecords(a, "attachments"));
      }
    }
    var oe = 200,
      ae = new Set();
    function ie(e, t, n) {
      try {
        var a = e + ":" + t;
        if (ae.has(a) || !r("justknobx")._("6827")) return;
        (ae.size >= oe && ae.clear(),
          ae.add(a),
          o("SupportConversationLogger.react").log({
            additional_data: {
              attachment_id: e,
              error_class: n instanceof Error ? n.name : typeof n,
              fallback_shown: "false",
              is_maisa_native: "false",
              is_user_facing: "true",
              stage: t,
            },
            event: "response_render_exception",
          }));
      } catch (e) {}
    }
    function le() {
      ae.clear();
    }
    function se(e, t) {
      var n = function (n, r) {
          return ie(t.id, n, r);
        },
        r = pe(t.serializedUnifiedResponse, n);
      if (r != null) return ve(e, t.id, r);
      var a = ge(t.serializedUnifiedResponse, n);
      if (a != null) {
        var i = Se(e, {
          id: t.id,
          markdownAttachment: a,
          type: "markdown_attachment",
        });
        if (i != null) return i;
      }
      var l = be(t.serializedUnifiedResponse, n);
      if (l != null) {
        var s = Se(e, {
          id: t.id,
          markdownAttachment: l,
          type: "markdown_attachment",
        });
        if (s != null) return s;
      }
      var u = e.get(t.id);
      return (
        u == null &&
          (u = e.create(t.id, "XFBCometAIHTSUnifiedResponseAttachment")),
        u
          .setValue(t.id, "id")
          .setValue(t.serializedUnifiedResponse, "serialized_unified_response"),
        o("CometRelay3DUtils").setRelay3DValue(
          u,
          "CometAIHTSChatMessage_message",
          W,
          q,
        ),
        u
      );
    }
    var ue = [
      {
        nodeType: "XFBHTSChatComposedTextSelectImpersonatorNode",
        operation: S,
        relayNode: R,
        rendererType: "XFBHTSChatComposedTextSelectImpersonatorNodeRenderer",
        tagName: "hts-select-impersonator",
      },
      {
        nodeType: "XFBHTSChatComposedTextIGSelectImpersonatorNode",
        operation: L,
        relayNode: E,
        rendererType: "XFBHTSChatComposedTextIGSelectImpersonatorNodeRenderer",
        tagName: "hts-ig-select-impersonator",
      },
      {
        nodeType: "HTSChatComposedTextReportSubmissionNode",
        operation: x,
        relayNode: $,
        rendererType: "HTSChatComposedTextReportSubmissionNodeRenderer",
        tagName: "hts-report-submission",
      },
      {
        nodeType: "HTSChatComposedTextReporterAppealSubmissionNode",
        operation: P,
        relayNode: N,
        rendererType: "HTSChatComposedTextReporterAppealSubmissionNodeRenderer",
        tagName: "hts-reporter-appeal-submission",
      },
    ];
    function ce(e, t) {
      var n = e.match(new RegExp("\\b" + t + '="([^"]*)"', "i"));
      if (n == null) return null;
      var r = n[1],
        o = r.split(r.includes("|") ? "|" : ",").filter(function (e) {
          return e !== "";
        });
      return o.length === 0 ? null : o;
    }
    function de(e) {
      var t = e.match(/<hts-buttongroup\b[^>]*>/i);
      if (t == null) return null;
      var n = t[0],
        r = ce(n, "labels"),
        o = ce(n, "postback"),
        a = r != null ? r : o;
      return a == null
        ? null
        : a.map(function (e, t) {
            var n;
            return {
              optionId: String(t),
              text: (n = o == null ? void 0 : o[t]) != null ? n : e,
            };
          });
    }
    function me(e) {
      if (e == null) return [];
      var t = e.primitive;
      if (t != null) return [t];
      var n = e.primitives;
      return Array.isArray(n) &&
        (e.__typename === "GenAIGridLayoutViewModel" ||
          e.__typename === "GenAIHScrollLayoutViewModel" ||
          e.__typename === "GenAIVStackLayoutViewModel")
        ? n
        : [];
    }
    function pe(e, t) {
      var n, r;
      try {
        r = JSON.parse(e);
      } catch (e) {
        return (t == null || t("unified_response", e), null);
      }
      var o = (n = r) == null ? void 0 : n.sections;
      if (o == null || !Array.isArray(o)) return null;
      for (var a of o) {
        var i = me(a == null ? void 0 : a.view_model),
          l = function () {
            var e;
            if (u.type !== "hts_button_group" || typeof u.data != "string")
              return 0;
            var n;
            try {
              n = JSON.parse(u.data);
            } catch (e) {
              return (t == null || t("button_group", e), 0);
            }
            var r = (e = n) == null ? void 0 : e.buttons;
            if (r == null || !Array.isArray(r)) return 0;
            var o = [];
            if (
              (r.forEach(function (e, t) {
                var n = e == null ? void 0 : e.postback,
                  r = e == null ? void 0 : e.label,
                  a = null;
                (typeof n == "string" && n !== ""
                  ? (a = n)
                  : typeof r == "string" && r !== "" && (a = r),
                  a != null && o.push({ optionId: String(t), text: a }));
              }),
              o.length > 0)
            )
              return { v: o };
          },
          s;
        for (var u of i) if (((s = l()), s !== 0 && s)) return s.v;
      }
      return null;
    }
    function _e(e) {
      return typeof e == "string" ? e : null;
    }
    function fe(e) {
      var t,
        n = _e(e.title),
        r = _e(e.url),
        o = _e(e.button_text);
      if (n == null || r == null || o == null) return null;
      var a = (t = _e(e.subtitle)) != null ? t : "",
        i = [],
        l = function (t, n) {
          typeof n == "string" && i.push(" " + t + '="' + n + '"');
        };
      return (
        l("feature-name", e.feature_name),
        l("status", e.status),
        l("setting-type", e.setting_type),
        l("page-name", e.page_name),
        l("page-metadata", e.page_metadata),
        l("page-image-uri", e.page_image_uri),
        l("fallback-url", e.fallback_url),
        l("description", e.description),
        '<hts-direct-link title="' +
          n +
          '" subtitle="' +
          a +
          '" url="' +
          r +
          '" button-text="' +
          o +
          '"' +
          i.join("") +
          ">"
      );
    }
    function ge(e, t) {
      var n, r, o, a;
      try {
        a = JSON.parse(e);
      } catch (e) {
        return (t == null || t("unified_response", e), null);
      }
      if (
        ((n = a.metadata) == null ? void 0 : n.__typename) !==
          "FOAUnifiedResponseMetadataEmpty" ||
        ((r = a.metadata) == null ? void 0 : r.placeholder) !== !1
      )
        return null;
      var i = (o = a) == null ? void 0 : o.sections;
      if (i == null || !Array.isArray(i)) return null;
      for (var l of i) {
        var s = me(l == null ? void 0 : l.view_model);
        for (var u of s)
          if (!(u.type !== "hts_direct_link" || typeof u.data != "string"))
            try {
              var c = fe(JSON.parse(u.data));
              if (c != null) return c;
            } catch (e) {
              t == null || t("direct_link", e);
              continue;
            }
      }
      return null;
    }
    function he(e) {
      return e.replace(/\"/g, "&quot;");
    }
    function ye(e) {
      return e.replace(/&quot;/g, '"');
    }
    function Ce(e) {
      var t,
        n = _e(e.title),
        r = _e(e.button_text),
        o = _e(e.accounts);
      if (n == null || r == null || o == null) return null;
      var a = (t = _e(e.subtitle)) != null ? t : "",
        i = _e(e.setting_type),
        l = i != null ? ' setting-type="' + i + '"' : "";
      return (
        '<hts-account-setting-deeplink title="' +
        n +
        '" subtitle="' +
        a +
        '" button-text="' +
        r +
        '" accounts="' +
        he(o) +
        '"' +
        l +
        ">"
      );
    }
    function be(e, t) {
      var n, r, o, a;
      try {
        a = JSON.parse(e);
      } catch (e) {
        return (t == null || t("unified_response", e), null);
      }
      if (
        ((n = a.metadata) == null ? void 0 : n.__typename) !==
          "FOAUnifiedResponseMetadataEmpty" ||
        ((r = a.metadata) == null ? void 0 : r.placeholder) !== !1
      )
        return null;
      var i = (o = a) == null ? void 0 : o.sections;
      if (i == null || !Array.isArray(i)) return null;
      for (var l of i) {
        var s = me(l == null ? void 0 : l.view_model);
        for (var u of s)
          if (
            !(
              u.type !== "hts_account_setting_deeplink" ||
              typeof u.data != "string"
            )
          )
            try {
              var c = Ce(JSON.parse(u.data));
              if (c != null) return c;
            } catch (e) {
              t == null || t("account_setting_deeplink", e);
              continue;
            }
      }
      return null;
    }
    function ve(e, t, n) {
      var r = e.get(t);
      (r == null && (r = e.create(t, "XFBCometAIHTSOptionsAttachment")),
        r.setValue(t, "id"));
      var a = n.map(function (n, r) {
        return e
          .create(t + ":option:" + r, "CometAIHTSOptionItem")
          .setValue(n.optionId, "option_id")
          .setValue(n.text, "text");
      });
      return (
        r.setLinkedRecords(a, "options"),
        o("CometRelay3DUtils").setRelay3DValue(
          r,
          "CometAIHTSChatMessage_message",
          U,
          V,
        ),
        r
      );
    }
    function Se(e, t) {
      var n = de(t.markdownAttachment);
      if (n != null) return ve(e, t.id, n);
      var a = De(e, t.markdownAttachment);
      if (a == null) return null;
      var i = e.get(t.id);
      (i == null && (i = e.create(t.id, "XFBCometAIHTSMarkdownAttachment")),
        i.setValue(t.id, "id"),
        i.setValue(Le(t), p),
        o("CometRelay3DUtils").setRelay3DValue(
          i,
          "CometAIHTSChatMessage_message",
          A,
          F,
        ));
      var l = r("uuidv4")(),
        s = e
          .create(
            o("relay-runtime").generateUniqueClientID(),
            "ComposedTextRootNode",
          )
          .setValue(l, "key")
          .setLinkedRecords(
            [
              e
                .create(
                  o("relay-runtime").generateUniqueClientID(),
                  "ComposedTextNode",
                )
                .setValue(a.childNodeKey, "key"),
            ],
            "children",
          ),
        u = e
          .create(
            o("relay-runtime").generateUniqueClientID(),
            "ComposedTextRootNodeRenderer",
          )
          .setLinkedRecord(s, "node");
      return (
        o("CometRelay3DUtils").setRelay3DValue(u, m, _, f),
        i.setLinkedRecord(
          e
            .create(
              o("relay-runtime").generateClientID(t.id, "composed_text_v2"),
              "ComposedTextInstance",
            )
            .setLinkedRecords([u, a.renderer], "nodes_js"),
          "composed_text_v2",
        ),
        i
      );
    }
    function Re(e, t) {
      r("vulture")("wqt8fYYNiVitoKs7zROwQu0L9_k=");
      var n = new Set();
      if (e == null) return n;
      var o = [];
      try {
        var a;
        o = (a = e.getLinkedRecords("edges")) != null ? a : [];
      } catch (e) {
        return n;
      }
      return (
        o.forEach(function (e) {
          var r,
            o = e == null ? void 0 : e.getLinkedRecord("node");
          if (
            o != null &&
            (o.getValue("user") === "USER" && n.clear(), o.getValue("id") !== t)
          ) {
            var a = (r = o.getLinkedRecords("attachments")) != null ? r : [];
            a.forEach(function (e) {
              var t = e == null ? void 0 : e.getValue(p);
              (typeof t == "string" && n.add(t), e != null && Ie(n, e));
            });
          }
        }),
        n
      );
    }
    function Le(e) {
      return e.markdownAttachment;
    }
    function Ee(e) {
      var t = new Set([Le(e)]);
      return (
        ue.forEach(function (n) {
          (r("vulture")("JRyy3hjahdX2vniHZG69zAegBXE="),
            Ae(e.markdownAttachment, n.tagName) && t.add(Te(n.rendererType)));
        }),
        t
      );
    }
    function ke(e, t) {
      var n = !1;
      return (
        t.forEach(function (t) {
          e.has(t) && (n = !0);
        }),
        n
      );
    }
    function Ie(e, t) {
      var n,
        r = t.getLinkedRecord("composed_text_v2"),
        o =
          (n = r == null ? void 0 : r.getLinkedRecords("nodes_js")) != null
            ? n
            : [];
      o.forEach(function (t) {
        var n = t == null ? void 0 : t.getType();
        if (typeof n == "string") {
          var r = ue.find(function (e) {
            return e.rendererType === n;
          });
          r != null && e.add(Te(r.rendererType));
        }
      });
    }
    function Te(e) {
      return "renderer:" + e;
    }
    function De(e, t) {
      var n = xe(t);
      if (n != null) return Pe(e, n);
      var a = Ne(t);
      if (a != null) return Me(e, a);
      for (var i of ue) if (Ae(t, i.tagName)) return we(e, i);
      var l = Fe(t);
      if (l != null) {
        var s = r("uuidv4")(),
          u = e
            .create(
              o("relay-runtime").generateUniqueClientID(),
              "XFBHTSChatComposedTextUpdateContextVariablesNode",
            )
            .setValue(s, "key")
            .setValue(l, "keyvalue"),
          c = e
            .create(
              o("relay-runtime").generateUniqueClientID(),
              "XFBHTSChatComposedTextUpdateContextVariablesNodeRenderer",
            )
            .setLinkedRecord(u, "node");
        return (
          o("CometRelay3DUtils").setRelay3DValue(c, m, M, w),
          { childNodeKey: s, renderer: c }
        );
      }
      return null;
    }
    function xe(e) {
      var t,
        n = e.match(/<hts-direct-link\b[^>]*>/i);
      if (n == null) return null;
      var r = n[0],
        o = $e(r, "title"),
        a = $e(r, "url"),
        i = $e(r, "button-text");
      return o == null || a == null || i == null
        ? null
        : {
            button_text: i,
            description: $e(r, "description"),
            fallback_url: $e(r, "fallback-url"),
            feature_name: $e(r, "feature-name"),
            page_image_uri: $e(r, "page-image-uri"),
            page_metadata: $e(r, "page-metadata"),
            page_name: $e(r, "page-name"),
            setting_type: $e(r, "setting-type"),
            status: $e(r, "status"),
            subtitle: (t = $e(r, "subtitle")) != null ? t : "",
            title: o,
            url: a,
          };
    }
    function $e(e, t) {
      var n = e.match(new RegExp("\\b" + t + '="([^"]*)"', "i"));
      return n == null ? null : n[1];
    }
    function Pe(e, t) {
      var n,
        a,
        i,
        l = r("uuidv4")(),
        s = e
          .create(
            o("relay-runtime").generateUniqueClientID(),
            "XFBHTSChatComposedTextDirectLinkNode",
          )
          .setValue(l, "key")
          .setValue((n = t.title) != null ? n : "", "title")
          .setValue(t.subtitle, "subtitle")
          .setValue(t.description, "description")
          .setValue((a = t.button_text) != null ? a : "", "button_text")
          .setValue((i = t.url) != null ? i : "", "url")
          .setValue(t.fallback_url, "fallback_url")
          .setValue(t.feature_name, "feature_name")
          .setValue(t.status, "status")
          .setValue(t.setting_type, "setting_type")
          .setValue(t.page_name, "page_name")
          .setValue(t.page_metadata, "page_metadata")
          .setValue(t.page_image_uri, "page_image_uri"),
        u = e
          .create(
            o("relay-runtime").generateUniqueClientID(),
            "XFBHTSChatComposedTextDirectLinkNodeRenderer",
          )
          .setLinkedRecord(s, "node");
      return (
        o("CometRelay3DUtils").setRelay3DValue(u, m, k, I),
        { childNodeKey: l, renderer: u }
      );
    }
    function Ne(e) {
      var t,
        n = e.match(/<hts-account-setting-deeplink\b[^>]*>/i);
      if (n == null) return null;
      var r = n[0],
        o = $e(r, "title"),
        a = $e(r, "button-text"),
        i = $e(r, "accounts");
      return o == null || a == null || i == null
        ? null
        : {
            accounts: ye(i),
            button_text: a,
            setting_type: $e(r, "setting-type"),
            subtitle: (t = $e(r, "subtitle")) != null ? t : "",
            title: o,
          };
    }
    function Me(e, t) {
      var n,
        a,
        i,
        l,
        s = r("uuidv4")(),
        u = e
          .create(
            o("relay-runtime").generateUniqueClientID(),
            "HTSChatComposedTextAccountSettingDeeplinkNode",
          )
          .setValue(s, "key")
          .setValue((n = t.title) != null ? n : "", "title")
          .setValue((a = t.subtitle) != null ? a : "", "subtitle")
          .setValue((i = t.button_text) != null ? i : "", "button_text")
          .setValue((l = t.accounts) != null ? l : "[]", "accounts")
          .setValue(t.setting_type, "setting_type"),
        c = e
          .create(
            o("relay-runtime").generateUniqueClientID(),
            "HTSChatComposedTextAccountSettingDeeplinkNodeRenderer",
          )
          .setLinkedRecord(u, "node");
      return (
        o("CometRelay3DUtils").setRelay3DValue(c, m, T, D),
        { childNodeKey: s, renderer: c }
      );
    }
    function we(e, t) {
      var n = r("uuidv4")(),
        a = e
          .create(o("relay-runtime").generateUniqueClientID(), t.nodeType)
          .setValue(n, "key"),
        i = e
          .create(o("relay-runtime").generateUniqueClientID(), t.rendererType)
          .setLinkedRecord(a, "node");
      return (
        o("CometRelay3DUtils").setRelay3DValue(i, m, t.operation, t.relayNode),
        { childNodeKey: n, renderer: i }
      );
    }
    function Ae(e, t) {
      return new RegExp("<" + t + "(?:\\s|>|/)", "i").test(e);
    }
    function Fe(e) {
      var t,
        n,
        r = e.match(
          /<hts-update-context-variables\b[^>]*\bkeyvalue=(?:\"([^\"]*)\"|\'([^\']*)\')/i,
        );
      return r == null
        ? null
        : (t = (n = r[1]) != null ? n : r[2]) != null
          ? t
          : null;
    }
    ((l.loadFRXGreetingRenderers = z),
      (l.areFRXGreetingRenderersLoaded = j),
      (l.createMessageInThread = Q),
      (l.createGreetingMessageInThread = X),
      (l.upsertMessageInThread = Y),
      (l.createMessageWithComplianceLinkInThread = J),
      (l.createMessageWithAppealCardInThread = Z),
      (l.createMessageWithReportedContentInThread = ee),
      (l.resetReportedRenderParseFailuresForTest = le),
      (l.parseButtonGroupOptions = de),
      (l.parseUnifiedResponseButtonGroupOptions = pe),
      (l.parseUnifiedResponseDirectLinkMarkdown = ge),
      (l.parseUnifiedResponseAccountSettingDeeplinkMarkdown = be));
  },
  98,
);
