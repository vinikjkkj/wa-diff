__d(
  "CometAIHTSChatStoreUpdaters",
  [
    "CometComposedText3DUpdaters",
    "CometRelay",
    "CometRelay3DUtils",
    "JSResourceForInteraction",
    "Promise",
    "ServerTime",
    "relay-runtime",
    "stripTopicMenuRoutingValue",
    "uuidv4",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n, r) {
      var a = o("CometRelay").ConnectionHandler.createEdge(
        e,
        t,
        n,
        "CometAIChatMessageThreadMessagesEdge",
      );
      r === "start"
        ? o("CometRelay").ConnectionHandler.insertEdgeBefore(t, a)
        : o("CometRelay").ConnectionHandler.insertEdgeAfter(t, a);
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
          u(e, r, o, n.position));
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
            u(e, a, i, n.position));
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
        position: n.position,
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
            u(e, g, h, n.position));
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
        var o = Ce(t, n.getValue("id")),
          a = [];
        (r.forEach(function (t) {
          var n = t.type === "markdown_attachment" ? ve(t) : null;
          if (!(n != null && Se(o, n))) {
            var r = t.type === "markdown_attachment" ? ye(e, t) : oe(e, t);
            r != null && a.push(r);
          }
        }),
          n.setLinkedRecords(a, "attachments"));
      }
    }
    function oe(e, t) {
      var n = ue(t.serializedUnifiedResponse);
      if (n != null) return he(e, t.id, n);
      var r = me(t.serializedUnifiedResponse);
      if (r != null) {
        var a = ye(e, {
          id: t.id,
          markdownAttachment: r,
          type: "markdown_attachment",
        });
        if (a != null) return a;
      }
      var i = ge(t.serializedUnifiedResponse);
      if (i != null) {
        var l = ye(e, {
          id: t.id,
          markdownAttachment: i,
          type: "markdown_attachment",
        });
        if (l != null) return l;
      }
      var s = e.get(t.id);
      return (
        s == null &&
          (s = e.create(t.id, "XFBCometAIHTSUnifiedResponseAttachment")),
        s
          .setValue(t.id, "id")
          .setValue(t.serializedUnifiedResponse, "serialized_unified_response"),
        o("CometRelay3DUtils").setRelay3DValue(
          s,
          "CometAIHTSChatMessage_message",
          W,
          q,
        ),
        s
      );
    }
    var ae = [
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
    function ie(e, t) {
      var n = e.match(new RegExp("\\b" + t + '="([^"]*)"', "i"));
      if (n == null) return null;
      var r = n[1],
        o = r.split(r.includes("|") ? "|" : ",").filter(function (e) {
          return e !== "";
        });
      return o.length === 0 ? null : o;
    }
    function le(e) {
      var t = e.match(/<hts-buttongroup\b[^>]*>/i);
      if (t == null) return null;
      var n = t[0],
        r = ie(n, "labels"),
        o = ie(n, "postback"),
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
    function se(e) {
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
    function ue(e) {
      var t, n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return null;
      }
      var r = (t = n) == null ? void 0 : t.sections;
      if (r == null || !Array.isArray(r)) return null;
      for (var o of r) {
        var a = se(o == null ? void 0 : o.view_model),
          i = function () {
            var e;
            if (s.type !== "hts_button_group" || typeof s.data != "string")
              return 0;
            var t;
            try {
              t = JSON.parse(s.data);
            } catch (e) {
              return 0;
            }
            var n = (e = t) == null ? void 0 : e.buttons;
            if (n == null || !Array.isArray(n)) return 0;
            var r = [];
            if (
              (n.forEach(function (e, t) {
                var n = e == null ? void 0 : e.postback,
                  o = e == null ? void 0 : e.label,
                  a = null;
                (typeof n == "string" && n !== ""
                  ? (a = n)
                  : typeof o == "string" && o !== "" && (a = o),
                  a != null && r.push({ optionId: String(t), text: a }));
              }),
              r.length > 0)
            )
              return { v: r };
          },
          l;
        for (var s of a) if (((l = i()), l !== 0 && l)) return l.v;
      }
      return null;
    }
    function ce(e) {
      return typeof e == "string" ? e : null;
    }
    function de(e) {
      var t,
        n = ce(e.title),
        r = ce(e.url),
        o = ce(e.button_text);
      if (n == null || r == null || o == null) return null;
      var a = (t = ce(e.subtitle)) != null ? t : "",
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
    function me(e) {
      var t, n, r, o;
      try {
        o = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (
        ((t = o.metadata) == null ? void 0 : t.__typename) !==
          "FOAUnifiedResponseMetadataEmpty" ||
        ((n = o.metadata) == null ? void 0 : n.placeholder) !== !1
      )
        return null;
      var a = (r = o) == null ? void 0 : r.sections;
      if (a == null || !Array.isArray(a)) return null;
      for (var i of a) {
        var l = se(i == null ? void 0 : i.view_model);
        for (var s of l)
          if (!(s.type !== "hts_direct_link" || typeof s.data != "string"))
            try {
              var u = de(JSON.parse(s.data));
              if (u != null) return u;
            } catch (e) {
              continue;
            }
      }
      return null;
    }
    function pe(e) {
      return e.replace(/\"/g, "&quot;");
    }
    function _e(e) {
      return e.replace(/&quot;/g, '"');
    }
    function fe(e) {
      var t,
        n = ce(e.title),
        r = ce(e.button_text),
        o = ce(e.accounts);
      if (n == null || r == null || o == null) return null;
      var a = (t = ce(e.subtitle)) != null ? t : "",
        i = ce(e.setting_type),
        l = i != null ? ' setting-type="' + i + '"' : "";
      return (
        '<hts-account-setting-deeplink title="' +
        n +
        '" subtitle="' +
        a +
        '" button-text="' +
        r +
        '" accounts="' +
        pe(o) +
        '"' +
        l +
        ">"
      );
    }
    function ge(e) {
      var t, n, r, o;
      try {
        o = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (
        ((t = o.metadata) == null ? void 0 : t.__typename) !==
          "FOAUnifiedResponseMetadataEmpty" ||
        ((n = o.metadata) == null ? void 0 : n.placeholder) !== !1
      )
        return null;
      var a = (r = o) == null ? void 0 : r.sections;
      if (a == null || !Array.isArray(a)) return null;
      for (var i of a) {
        var l = se(i == null ? void 0 : i.view_model);
        for (var s of l)
          if (
            !(
              s.type !== "hts_account_setting_deeplink" ||
              typeof s.data != "string"
            )
          )
            try {
              var u = fe(JSON.parse(s.data));
              if (u != null) return u;
            } catch (e) {
              continue;
            }
      }
      return null;
    }
    function he(e, t, n) {
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
    function ye(e, t) {
      var n = le(t.markdownAttachment);
      if (n != null) return he(e, t.id, n);
      var a = Ee(e, t.markdownAttachment);
      if (a == null) return null;
      var i = e.get(t.id);
      (i == null && (i = e.create(t.id, "XFBCometAIHTSMarkdownAttachment")),
        i.setValue(t.id, "id"),
        i.setValue(be(t), p),
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
    function Ce(e, t) {
      var n = new Set();
      if (e == null) return n;
      var r = [];
      try {
        var o;
        r = (o = e.getLinkedRecords("edges")) != null ? o : [];
      } catch (e) {
        return n;
      }
      return (
        r.forEach(function (e) {
          var r,
            o = e == null ? void 0 : e.getLinkedRecord("node");
          if (
            o != null &&
            (o.getValue("user") === "USER" && n.clear(), o.getValue("id") !== t)
          ) {
            var a = (r = o.getLinkedRecords("attachments")) != null ? r : [];
            a.forEach(function (e) {
              var t = e == null ? void 0 : e.getValue(p);
              (typeof t == "string" && n.add(t), e != null && Re(n, e));
            });
          }
        }),
        n
      );
    }
    function be(e) {
      return e.markdownAttachment;
    }
    function ve(e) {
      var t = new Set([be(e)]);
      return (
        ae.forEach(function (n) {
          (r("vulture")("JRyy3hjahdX2vniHZG69zAegBXE="),
            Pe(e.markdownAttachment, n.tagName) && t.add(Le(n.rendererType)));
        }),
        t
      );
    }
    function Se(e, t) {
      var n = !1;
      return (
        t.forEach(function (t) {
          e.has(t) && (n = !0);
        }),
        n
      );
    }
    function Re(e, t) {
      var n,
        r = t.getLinkedRecord("composed_text_v2"),
        o =
          (n = r == null ? void 0 : r.getLinkedRecords("nodes_js")) != null
            ? n
            : [];
      o.forEach(function (t) {
        var n = t == null ? void 0 : t.getType();
        if (typeof n == "string") {
          var r = ae.find(function (e) {
            return e.rendererType === n;
          });
          r != null && e.add(Le(r.rendererType));
        }
      });
    }
    function Le(e) {
      return "renderer:" + e;
    }
    function Ee(e, t) {
      var n = ke(t);
      if (n != null) return Te(e, n);
      var a = De(t);
      if (a != null) return xe(e, a);
      for (var i of ae) if (Pe(t, i.tagName)) return $e(e, i);
      var l = Ne(t);
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
    function ke(e) {
      var t,
        n = e.match(/<hts-direct-link\b[^>]*>/i);
      if (n == null) return null;
      var r = n[0],
        o = Ie(r, "title"),
        a = Ie(r, "url"),
        i = Ie(r, "button-text");
      return o == null || a == null || i == null
        ? null
        : {
            button_text: i,
            description: Ie(r, "description"),
            fallback_url: Ie(r, "fallback-url"),
            feature_name: Ie(r, "feature-name"),
            page_image_uri: Ie(r, "page-image-uri"),
            page_metadata: Ie(r, "page-metadata"),
            page_name: Ie(r, "page-name"),
            setting_type: Ie(r, "setting-type"),
            status: Ie(r, "status"),
            subtitle: (t = Ie(r, "subtitle")) != null ? t : "",
            title: o,
            url: a,
          };
    }
    function Ie(e, t) {
      var n = e.match(new RegExp("\\b" + t + '="([^"]*)"', "i"));
      return n == null ? null : n[1];
    }
    function Te(e, t) {
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
    function De(e) {
      var t,
        n = e.match(/<hts-account-setting-deeplink\b[^>]*>/i);
      if (n == null) return null;
      var r = n[0],
        o = Ie(r, "title"),
        a = Ie(r, "button-text"),
        i = Ie(r, "accounts");
      return o == null || a == null || i == null
        ? null
        : {
            accounts: _e(i),
            button_text: a,
            setting_type: Ie(r, "setting-type"),
            subtitle: (t = Ie(r, "subtitle")) != null ? t : "",
            title: o,
          };
    }
    function xe(e, t) {
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
    function $e(e, t) {
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
    function Pe(e, t) {
      return new RegExp("<" + t + "(?:\\s|>|/)", "i").test(e);
    }
    function Ne(e) {
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
      (l.parseButtonGroupOptions = le),
      (l.parseUnifiedResponseButtonGroupOptions = ue),
      (l.parseUnifiedResponseDirectLinkMarkdown = me),
      (l.parseUnifiedResponseAccountSettingDeeplinkMarkdown = ge));
  },
  98,
);
