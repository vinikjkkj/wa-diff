__d(
  "CometUFIComposerPrefillMentionPluginUtils",
  ["CometLexicalGenericEntityNode", "FBLogger", "Lexical", "LexicalText"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("LexicalText").$rootTextContent(),
        a = o("LexicalText").$isRootTextContentEmpty(e.isComposing()),
        i = !1;
      if (
        (o("Lexical")
          .$getRoot()
          .getAllTextNodes()
          .forEach(function (e) {
            o("CometLexicalGenericEntityNode").$isCometLexicalGenericEntityNode(
              e,
            ) &&
              e.getTextContent() === n.trim() &&
              (i = !0);
          }),
        !(!a && !i))
      ) {
        var l = o("Lexical").$getRoot(),
          u = l.getFirstChild();
        if (o("Lexical").$isElementNode(u)) u.clear();
        else if (u === null)
          ((u = o("Lexical").$createParagraphNode()), l.append(u));
        else {
          r("FBLogger")("UFILexicalComposer").mustfix(
            "Prefill mentions plugin found a non-block first node. This should not happen.",
          );
          return;
        }
        var c = s(t.getType()),
          d = o(
            "CometLexicalGenericEntityNode",
          ).$createCometLexicalGenericEntityNode({
            id: t.getUniqueID(),
            text: t.getTitle(),
            type: c,
            uri: t.getURI(),
          });
        u.append(d);
        var m = new (o("Lexical").TextNode)(" ");
        (d.insertAfter(m), m.select());
      }
    }
    function s(e) {
      switch (e) {
        case "Actor":
        case "Application":
        case "CMSObject":
        case "Doc":
        case "Event":
        case "FundraiserPersonForPerson":
        case "FundraiserPersonToCharity":
        case "Group":
        case "GroupAnonAuthorProfile":
        case "GroupCommerceProductItem":
        case "GroupRule":
        case "InstantArticle":
        case "KnowledgeNote":
        case "Menu":
        case "Note":
        case "Page":
        case "Photo":
        case "ProductItem":
        case "ReducedMessagingActor":
        case "Story":
        case "User":
        case "Video":
        case "VideoList":
        case "WorkKnowledgeCollection":
          return e;
        default:
          return (
            r("FBLogger")("UFILexicalPlugin").mustfix(
              "PrefillMention unexpected command entity type %s",
              e,
            ),
            "Actor"
          );
      }
    }
    l.$addMentionIfEditorIsEmptyAndDoesNotHaveMention = e;
  },
  98,
);
