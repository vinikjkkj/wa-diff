__d(
  "WAWebDataTransfer",
  [],
  function (t, n, r, o, a, i) {
    var e = /\r\n/g,
      l = (function () {
        function t(e) {
          var t = this;
          ((this.hasText = function () {
            return t.hasType("text/plain");
          }),
            (this.hasType = function (e) {
              return t.types.includes(e);
            }),
            (this.data = e),
            e.types
              ? Array.isArray(e.types)
                ? (this.types = e.types)
                : (this.types = Object.keys(e.types).map(function (t) {
                    return e.types[t];
                  }))
              : (this.types = []));
        }
        var n = t.prototype;
        return (
          (n.getItems = function () {
            var e = this;
            if (this.data.items)
              return Array.prototype.slice.call(this.data.items);
            var t = this.$1();
            return this.types.map(function (n) {
              return {
                type: n,
                data: e.data.getData(n),
                kind: t.includes(n) ? "string" : "file",
              };
            });
          }),
          (n.$1 = function () {
            return Array.prototype.slice
              .call(this.data.files)
              .map(function (e) {
                var t = e.type;
                return t;
              });
          }),
          (n.getText = async function (n) {
            var t = await this.$2(n);
            return t
              ? t.replace(
                  e,
                  `
`,
                )
              : null;
          }),
          (n.$2 = async function (t) {
            var e = t || [];
            e.length === 0 && e.push("text/plain");
            var n = this.data;
            if (n.getData) {
              var r;
              return (
                e.some(function (e) {
                  var t = n.getData(e);
                  if (t) return ((r = n.getData(e)), !0);
                }),
                Promise.resolve(r)
              );
            }
            var o = s(this.data.items, e);
            if (o.length) {
              var a = Promise.all(
                  o.map(function (e) {
                    return new Promise(function (t) {
                      return e.getAsString(t);
                    });
                  }),
                ),
                i = await a;
              return i.find(function (e) {
                return e.length;
              });
            }
          }),
          (n.getFiles = function () {
            return this.data.items
              ? Array.prototype.slice
                  .call(this.data.items)
                  .filter(function (e) {
                    var t = e.kind;
                    return t === "file";
                  })
                  .map(function (e) {
                    return e.getAsFile();
                  })
                  .filter(function (e) {
                    return !!e;
                  })
              : Array.prototype.slice.call(this.data.files || []);
          }),
          (n.getData = function (t) {
            return this.data.getData(t);
          }),
          (n.hasFiles = function () {
            return this.data.items
              ? Array.prototype.slice.call(this.data.items).some(function (e) {
                  var t = e.kind;
                  return t === "file";
                })
              : !!Array.prototype.slice.call(this.data.files || []).length;
          }),
          t
        );
      })();
    function s(e, t) {
      var n = Array.from(e);
      return t.reduce(function (e, t) {
        var r = n.find(function (e) {
          return e.type === t;
        });
        return (r && e.push(r), e);
      }, []);
    }
    i.default = l;
  },
  66,
);
