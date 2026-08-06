__d(
  "BrowserToolsDispatcher",
  ["BrowserToolsConnection", "FBLogger", "browser-tools-common"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = window.top !== window,
      s = window === window.top ? 0 : Math.floor(Math.random() * 1e5) + 1,
      u = (function () {
        function t(e) {
          var t = this;
          ((this.connections = []),
            (this.connecting = !1),
            (this.linked = !1),
            (this.$1 = []),
            (this.$3 = function (e, n) {
              if (t.port != null) {
                r("FBLogger")("Comet Dev Tools").mustfix(
                  "Comet Dev Tools is attempting multiple connections to the page",
                );
                return;
              }
              (n
                ? ((t.port = n),
                  (t.port.onmessage = t.$5),
                  (t.port.onmessageerror = t.$6),
                  t.linked
                    ? r("FBLogger")("Comet Dev Tools").mustfix(
                        "Comet Dev Tools thinks it's linked before getting a port",
                      )
                    : t.port.postMessage({
                        action: "register",
                        sourceIFrameId: s,
                        location: window.location.href,
                      }))
                : t.$2 && t.$4(e),
                (t.connecting = !1));
            }),
            (this.$6 = function () {
              r("FBLogger")("Comet Dev Tools").mustfix(
                "Message Error: message that cannot be deserialized in client",
                "Comet Dev Tools",
              );
            }),
            (this.$5 = function (e) {
              var n = e.data;
              if (
                !o(
                  "browser-tools-common",
                ).BrowserToolsMessageValidation.isValidMessage(n)
              ) {
                r("FBLogger")("Comet Dev Tools").mustfix(
                  "Protocol Error. Invalid message in dev Panel",
                  "Comet Dev Tools",
                );
                return;
              }
              switch (n.action) {
                case "tab_id":
                  t.tabId = o(
                    "browser-tools-common",
                  ).BrowserToolsMessageValidation.asNumber(n.tabId);
                  break;
                case "relay":
                  var a = o(
                      "browser-tools-common",
                    ).BrowserToolsMessageValidation.getMessageNamespace(n),
                    i = o(
                      "browser-tools-common",
                    ).BrowserToolsMessageValidation.getMessageString(n, "kind");
                  if (i == null) {
                    r("FBLogger")("Comet Dev Tools").mustfix(
                      "Got a message without a kind",
                      "Comet Dev Tools",
                    );
                    return;
                  }
                  t.connections.forEach(function (e) {
                    e.namespace === a && e.triggerOnMessage(i, n.body);
                  });
                  break;
                case "linked":
                  ((t.linked = !0), t.$4(null));
                  break;
                case "unlinked":
                  ((t.linked = !1),
                    t.connections.forEach(function (e) {
                      (e.triggerOnDisconnected(), e.cleanup());
                    }),
                    (t.connections = []));
                  break;
                default:
                  r("FBLogger")("Comet Dev Tools").mustfix(
                    "Protocol error: Unknown message type in client",
                    "Comet Dev Tools",
                  );
              }
            }),
            (this.$2 = e === !0));
        }
        var n = t.prototype;
        return (
          (n.$7 = function (t, n) {
            var e = new (r("BrowserToolsConnection"))(this, t);
            (this.connections.push(e), n(null, e));
          }),
          (n.$4 = function (t) {
            for (var e of this.$1) {
              var n = e.callback,
                r = e.namespace;
              t ? n(t, null) : this.$7(r, n);
            }
          }),
          (n.postMessage = function (t, n, o) {
            if (this.port == null) {
              r("FBLogger")("Comet Dev Tools").mustfix(
                "BrowserTools attempted to send a message before establishing a connection",
                "Comet Dev Tools",
              );
              return;
            } else
              this.port.postMessage({
                action: "relay",
                body: o,
                kind: n,
                namespace: t,
                sourceIFrameId: s,
              });
          }),
          (n.connect = function (n, r) {
            var t = this,
              a = n.connectFromIFrame,
              i = n.namespace;
            if (e && !a) {
              r(
                new Error(
                  "browser tools tried to connect from iframe but connectFromIFrame was false in ConnectOptions (namespace=" +
                    i +
                    ")",
                ),
                null,
              );
              return;
            }
            (!this.connecting &&
              this.port == null &&
              ((this.connecting = !0),
              o("browser-tools-common").EasyMessageChannels.connect(
                { hash: "comet://devtools/connect", window: window.top },
                this.$3,
              )),
              this.$1.push({ callback: r, namespace: i }),
              this.isLinked() &&
                window.setTimeout(function () {
                  t.$7(i, r);
                }, 0));
          }),
          (n.connectOrFail = function (n, o) {
            (e && !n.connectFromIFrame) ||
              this.connect(n, function (e, t) {
                if (!t && e != null) {
                  r("FBLogger")("Comet Dev Tools")
                    .catching(e)
                    .mustfix(
                      "Got the following error when connecting to Comet Dev Tools",
                    );
                  return;
                }
                if (!t) {
                  r("FBLogger")("Comet Dev Tools").mustfix(
                    "Unknown error when connecting to Comet Dev Tools.",
                  );
                  return;
                }
                o(t);
              });
          }),
          (n.isLinked = function () {
            return this.port != null && this.linked === !0;
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
