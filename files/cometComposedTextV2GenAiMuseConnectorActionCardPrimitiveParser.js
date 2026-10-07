__d(
  "cometComposedTextV2GenAiMuseConnectorActionCardPrimitiveParser",
  ["MSGDataclassTypes.flow", "cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("MSGDataclassTypes.flow").GenAiConnectorActionKind.AddAccount,
      o("MSGDataclassTypes.flow").GenAiConnectorActionKind.AddScope,
      o("MSGDataclassTypes.flow").GenAiConnectorActionKind.Connect,
    ]);
    function s(t) {
      return !e.has(t.action) ||
        t.connector_id.trim() === "" ||
        t.title.trim() === "" ||
        !u(t.action_url)
        ? null
        : o("cometComposedTextV2NodeBuilders")
            .buildRootNode()
            .append(
              o("cometComposedTextV2NodeBuilders").buildConnectorActionCardNode(
                {
                  accountId: t.account_id,
                  action: t.action,
                  actionUrl: t.action_url,
                  cardId: t.card_id,
                  connectorId: t.connector_id,
                  ctaLabel: t.cta_label,
                  imageUrl: t.image_url,
                  nodeType: "connectorActionCard",
                  scopeKey: t.scope_key,
                  status: t.status,
                  subtitle: t.subtitle,
                  title: t.title,
                },
              ),
            );
    }
    function u(e) {
      try {
        var t = new URL(e),
          n = t.hostname,
          r = t.password,
          o = t.protocol,
          a = t.username;
        return o === "https:" && n !== "" && a === "" && r === "";
      } catch (e) {
        return !1;
      }
    }
    l.default = s;
  },
  98,
);
