__d(
  "papaparse-5.4.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function (t, n) {
        typeof l == "object" && typeof e != "undefined"
          ? (l.exports = n())
          : (t.Papa = n());
      })(this, function e() {
        var t = (function () {
          return typeof self != "undefined"
            ? self
            : typeof window != "undefined"
              ? window
              : typeof t != "undefined"
                ? t
                : {};
        })();
        function n() {
          var n = t.URL || t.webkitURL || null,
            r = e.toString();
          return (
            l.BLOB_URL ||
            (l.BLOB_URL = n.createObjectURL(
              new Blob(
                [
                  "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                  "(",
                  r,
                  ")();",
                ],
                { type: "text/javascript" },
              ),
            ))
          );
        }
        var r = !t.document && !!t.postMessage,
          o = t.IS_PAPA_WORKER || !1,
          a = {},
          i = 0,
          l = {};
        if (
          ((l.parse = u),
          (l.unparse = c),
          (l.RECORD_SEP = ""),
          (l.UNIT_SEP = ""),
          (l.BYTE_ORDER_MARK = "\uFEFF"),
          (l.BAD_DELIMITERS = ["\r", "\n", '"', l.BYTE_ORDER_MARK]),
          (l.WORKERS_SUPPORTED = !r && !!t.Worker),
          (l.NODE_STREAM_INPUT = 1),
          (l.LocalChunkSize = 1024 * 1024 * 10),
          (l.RemoteChunkSize = 1024 * 1024 * 5),
          (l.DefaultDelimiter = ","),
          (l.Parser = C),
          (l.ParserHandle = h),
          (l.NetworkStreamer = m),
          (l.FileStreamer = p),
          (l.StringStreamer = _),
          (l.ReadableStreamStreamer = f),
          typeof PAPA_BROWSER_CONTEXT == "undefined" &&
            (l.DuplexStreamStreamer = g),
          t.jQuery)
        ) {
          var s = t.jQuery;
          s.fn.parse = function (e) {
            var n = e.config || {},
              r = [];
            return (
              this.each(function (e) {
                var o =
                  s(this).prop("tagName").toUpperCase() === "INPUT" &&
                  s(this).attr("type").toLowerCase() === "file" &&
                  t.FileReader;
                if (!o || !this.files || this.files.length === 0) return !0;
                for (var a = 0; a < this.files.length; a++)
                  r.push({
                    file: this.files[a],
                    inputElem: this,
                    instanceConfig: s.extend({}, n),
                  });
              }),
              o(),
              this
            );
            function o() {
              if (r.length === 0) {
                I(e.complete) && e.complete();
                return;
              }
              var t = r[0];
              if (I(e.before)) {
                var n = e.before(t.file, t.inputElem);
                if (typeof n == "object")
                  if (n.action === "abort") {
                    a("AbortError", t.file, t.inputElem, n.reason);
                    return;
                  } else if (n.action === "skip") {
                    i();
                    return;
                  } else
                    typeof n.config == "object" &&
                      (t.instanceConfig = s.extend(t.instanceConfig, n.config));
                else if (n === "skip") {
                  i();
                  return;
                }
              }
              var o = t.instanceConfig.complete;
              ((t.instanceConfig.complete = function (e) {
                (I(o) && o(e, t.file, t.inputElem), i());
              }),
                l.parse(t.file, t.instanceConfig));
            }
            function a(t, n, r, o) {
              I(e.error) && e.error({ name: t }, n, r, o);
            }
            function i() {
              (r.splice(0, 1), o());
            }
          };
        }
        o && (t.onmessage = L);
        function u(e, n) {
          n = n || {};
          var r = n.dynamicTyping || !1;
          if (
            (I(r) && ((n.dynamicTypingFunction = r), (r = {})),
            (n.dynamicTyping = r),
            (n.transform = I(n.transform) ? n.transform : !1),
            n.worker && l.WORKERS_SUPPORTED)
          ) {
            var o = b();
            ((o.userStep = n.step),
              (o.userChunk = n.chunk),
              (o.userComplete = n.complete),
              (o.userError = n.error),
              (n.step = I(n.step)),
              (n.chunk = I(n.chunk)),
              (n.complete = I(n.complete)),
              (n.error = I(n.error)),
              delete n.worker,
              o.postMessage({ input: e, config: n, workerId: o.id }));
            return;
          }
          var a = null;
          if (
            e === l.NODE_STREAM_INPUT &&
            typeof PAPA_BROWSER_CONTEXT == "undefined"
          )
            return ((a = new g(n)), a.getStream());
          return (
            typeof e == "string"
              ? ((e = i(e)), n.download ? (a = new m(n)) : (a = new _(n)))
              : e.readable === !0 && I(e.read) && I(e.on)
                ? (a = new f(n))
                : ((t.File && e instanceof File) || e instanceof Object) &&
                  (a = new p(n)),
            a.stream(e)
          );
          function i(e) {
            return e.charCodeAt(0) === 65279 ? e.slice(1) : e;
          }
        }
        function c(e, t) {
          var n = !1,
            r = !0,
            o = ",",
            a = "\r\n",
            i = '"',
            s = i + i,
            u = !1,
            c = null,
            d = !1;
          p();
          var m = new RegExp(y(i), "g");
          if ((typeof e == "string" && (e = JSON.parse(e)), Array.isArray(e))) {
            if (!e.length || Array.isArray(e[0])) return _(null, e, u);
            if (typeof e[0] == "object") return _(c || Object.keys(e[0]), e, u);
          } else if (typeof e == "object")
            return (
              typeof e.data == "string" && (e.data = JSON.parse(e.data)),
              Array.isArray(e.data) &&
                (e.fields || (e.fields = (e.meta && e.meta.fields) || c),
                e.fields ||
                  (e.fields = Array.isArray(e.data[0])
                    ? e.fields
                    : typeof e.data[0] == "object"
                      ? Object.keys(e.data[0])
                      : []),
                !Array.isArray(e.data[0]) &&
                  typeof e.data[0] != "object" &&
                  (e.data = [e.data])),
              _(e.fields || [], e.data || [], u)
            );
          throw new Error("Unable to serialize unrecognized input");
          function p() {
            if (typeof t == "object") {
              if (
                (typeof t.delimiter == "string" &&
                  !l.BAD_DELIMITERS.filter(function (e) {
                    return t.delimiter.indexOf(e) !== -1;
                  }).length &&
                  (o = t.delimiter),
                (typeof t.quotes == "boolean" ||
                  typeof t.quotes == "function" ||
                  Array.isArray(t.quotes)) &&
                  (n = t.quotes),
                (typeof t.skipEmptyLines == "boolean" ||
                  typeof t.skipEmptyLines == "string") &&
                  (u = t.skipEmptyLines),
                typeof t.newline == "string" && (a = t.newline),
                typeof t.quoteChar == "string" && (i = t.quoteChar),
                typeof t.header == "boolean" && (r = t.header),
                Array.isArray(t.columns))
              ) {
                if (t.columns.length === 0)
                  throw new Error("Option columns is empty");
                c = t.columns;
              }
              (t.escapeChar !== void 0 && (s = t.escapeChar + i),
                (typeof t.escapeFormulae == "boolean" ||
                  t.escapeFormulae instanceof RegExp) &&
                  (d =
                    t.escapeFormulae instanceof RegExp
                      ? t.escapeFormulae
                      : /^[=+\-@\t\r].*$/));
            }
          }
          function _(e, t, n) {
            var i = "";
            (typeof e == "string" && (e = JSON.parse(e)),
              typeof t == "string" && (t = JSON.parse(t)));
            var l = Array.isArray(e) && e.length > 0,
              s = !Array.isArray(t[0]);
            if (l && r) {
              for (var u = 0; u < e.length; u++)
                (u > 0 && (i += o), (i += f(e[u], u)));
              t.length > 0 && (i += a);
            }
            for (var c = 0; c < t.length; c++) {
              var d = l ? e.length : t[c].length,
                m = !1,
                p = l ? Object.keys(t[c]).length === 0 : t[c].length === 0;
              if (
                (n &&
                  !l &&
                  (m =
                    n === "greedy"
                      ? t[c].join("").trim() === ""
                      : t[c].length === 1 && t[c][0].length === 0),
                n === "greedy" && l)
              ) {
                for (var _ = [], g = 0; g < d; g++) {
                  var h = s ? e[g] : g;
                  _.push(t[c][h]);
                }
                m = _.join("").trim() === "";
              }
              if (!m) {
                for (var y = 0; y < d; y++) {
                  y > 0 && !p && (i += o);
                  var C = l && s ? e[y] : y;
                  i += f(t[c][C], y);
                }
                c < t.length - 1 && (!n || (d > 0 && !p)) && (i += a);
              }
            }
            return i;
          }
          function f(e, t) {
            if (typeof e == "undefined" || e === null) return "";
            if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
            var r = !1;
            d && typeof e == "string" && d.test(e) && ((e = "'" + e), (r = !0));
            var a = e.toString().replace(m, s);
            return (
              (r =
                r ||
                n === !0 ||
                (typeof n == "function" && n(e, t)) ||
                (Array.isArray(n) && n[t]) ||
                g(a, l.BAD_DELIMITERS) ||
                a.indexOf(o) > -1 ||
                a.charAt(0) === " " ||
                a.charAt(a.length - 1) === " "),
              r ? i + a + i : a
            );
          }
          function g(e, t) {
            for (var n = 0; n < t.length; n++)
              if (e.indexOf(t[n]) > -1) return !0;
            return !1;
          }
        }
        function d(e) {
          ((this._handle = null),
            (this._finished = !1),
            (this._completed = !1),
            (this._halted = !1),
            (this._input = null),
            (this._baseIndex = 0),
            (this._partialLine = ""),
            (this._rowCount = 0),
            (this._start = 0),
            (this._nextChunk = null),
            (this.isFirstChunk = !0),
            (this._completeResults = { data: [], errors: [], meta: {} }),
            n.call(this, e),
            (this.parseChunk = function (e, n) {
              if (this.isFirstChunk && I(this._config.beforeFirstChunk)) {
                var r = this._config.beforeFirstChunk(e);
                r !== void 0 && (e = r);
              }
              ((this.isFirstChunk = !1), (this._halted = !1));
              var a = this._partialLine + e;
              this._partialLine = "";
              var i = this._handle.parse(a, this._baseIndex, !this._finished);
              if (this._handle.paused() || this._handle.aborted()) {
                this._halted = !0;
                return;
              }
              var s = i.meta.cursor;
              (this._finished ||
                ((this._partialLine = a.substring(s - this._baseIndex)),
                (this._baseIndex = s)),
                i && i.data && (this._rowCount += i.data.length));
              var u =
                this._finished ||
                (this._config.preview &&
                  this._rowCount >= this._config.preview);
              if (o)
                t.postMessage({
                  results: i,
                  workerId: l.WORKER_ID,
                  finished: u,
                });
              else if (I(this._config.chunk) && !n) {
                if (
                  (this._config.chunk(i, this._handle),
                  this._handle.paused() || this._handle.aborted())
                ) {
                  this._halted = !0;
                  return;
                }
                ((i = void 0), (this._completeResults = void 0));
              }
              return (
                !this._config.step &&
                  !this._config.chunk &&
                  ((this._completeResults.data =
                    this._completeResults.data.concat(i.data)),
                  (this._completeResults.errors =
                    this._completeResults.errors.concat(i.errors)),
                  (this._completeResults.meta = i.meta)),
                !this._completed &&
                  u &&
                  I(this._config.complete) &&
                  (!i || !i.meta.aborted) &&
                  (this._config.complete(this._completeResults, this._input),
                  (this._completed = !0)),
                !u && (!i || !i.meta.paused) && this._nextChunk(),
                i
              );
            }),
            (this._sendError = function (e) {
              I(this._config.error)
                ? this._config.error(e)
                : o &&
                  this._config.error &&
                  t.postMessage({
                    workerId: l.WORKER_ID,
                    error: e,
                    finished: !1,
                  });
            }));
          function n(e) {
            var t = E(e);
            ((t.chunkSize = parseInt(t.chunkSize)),
              !e.step && !e.chunk && (t.chunkSize = null),
              (this._handle = new h(t)),
              (this._handle.streamer = this),
              (this._config = t));
          }
        }
        function m(e) {
          ((e = e || {}),
            e.chunkSize || (e.chunkSize = l.RemoteChunkSize),
            d.call(this, e));
          var t;
          (r
            ? (this._nextChunk = function () {
                (this._readChunk(), this._chunkLoaded());
              })
            : (this._nextChunk = function () {
                this._readChunk();
              }),
            (this.stream = function (e) {
              ((this._input = e), this._nextChunk());
            }),
            (this._readChunk = function () {
              if (this._finished) {
                this._chunkLoaded();
                return;
              }
              if (
                ((t = new XMLHttpRequest()),
                this._config.withCredentials &&
                  (t.withCredentials = this._config.withCredentials),
                r ||
                  ((t.onload = k(this._chunkLoaded, this)),
                  (t.onerror = k(this._chunkError, this))),
                t.open(
                  this._config.downloadRequestBody ? "POST" : "GET",
                  this._input,
                  !r,
                ),
                this._config.downloadRequestHeaders)
              ) {
                var e = this._config.downloadRequestHeaders;
                for (var n in e) t.setRequestHeader(n, e[n]);
              }
              if (this._config.chunkSize) {
                var o = this._start + this._config.chunkSize - 1;
                t.setRequestHeader("Range", "bytes=" + this._start + "-" + o);
              }
              try {
                t.send(this._config.downloadRequestBody);
              } catch (e) {
                this._chunkError(e.message);
              }
              r && t.status === 0 && this._chunkError();
            }),
            (this._chunkLoaded = function () {
              if (t.readyState === 4) {
                if (t.status < 200 || t.status >= 400) {
                  this._chunkError();
                  return;
                }
                ((this._start += this._config.chunkSize
                  ? this._config.chunkSize
                  : t.responseText.length),
                  (this._finished =
                    !this._config.chunkSize || this._start >= n(t)),
                  this.parseChunk(t.responseText));
              }
            }),
            (this._chunkError = function (e) {
              var n = t.statusText || e;
              this._sendError(new Error(n));
            }));
          function n(e) {
            var t = e.getResponseHeader("Content-Range");
            return t === null
              ? -1
              : parseInt(t.substring(t.lastIndexOf("/") + 1));
          }
        }
        ((m.prototype = Object.create(d.prototype)),
          (m.prototype.constructor = m));
        function p(e) {
          ((e = e || {}),
            e.chunkSize || (e.chunkSize = l.LocalChunkSize),
            d.call(this, e));
          var t,
            n,
            r = typeof FileReader != "undefined";
          ((this.stream = function (e) {
            ((this._input = e),
              (n = e.slice || e.webkitSlice || e.mozSlice),
              r
                ? ((t = new FileReader()),
                  (t.onload = k(this._chunkLoaded, this)),
                  (t.onerror = k(this._chunkError, this)))
                : (t = new FileReaderSync()),
              this._nextChunk());
          }),
            (this._nextChunk = function () {
              !this._finished &&
                (!this._config.preview ||
                  this._rowCount < this._config.preview) &&
                this._readChunk();
            }),
            (this._readChunk = function () {
              var e = this._input;
              if (this._config.chunkSize) {
                var o = Math.min(
                  this._start + this._config.chunkSize,
                  this._input.size,
                );
                e = n.call(e, this._start, o);
              }
              var a = t.readAsText(e, this._config.encoding);
              r || this._chunkLoaded({ target: { result: a } });
            }),
            (this._chunkLoaded = function (e) {
              ((this._start += this._config.chunkSize),
                (this._finished =
                  !this._config.chunkSize || this._start >= this._input.size),
                this.parseChunk(e.target.result));
            }),
            (this._chunkError = function () {
              this._sendError(t.error);
            }));
        }
        ((p.prototype = Object.create(d.prototype)),
          (p.prototype.constructor = p));
        function _(e) {
          ((e = e || {}), d.call(this, e));
          var t;
          ((this.stream = function (e) {
            return ((t = e), this._nextChunk());
          }),
            (this._nextChunk = function () {
              if (!this._finished) {
                var e = this._config.chunkSize,
                  n;
                return (
                  e
                    ? ((n = t.substring(0, e)), (t = t.substring(e)))
                    : ((n = t), (t = "")),
                  (this._finished = !t),
                  this.parseChunk(n)
                );
              }
            }));
        }
        ((_.prototype = Object.create(_.prototype)),
          (_.prototype.constructor = _));
        function f(e) {
          ((e = e || {}), d.call(this, e));
          var t = [],
            n = !0,
            r = !1;
          ((this.pause = function () {
            (d.prototype.pause.apply(this, arguments), this._input.pause());
          }),
            (this.resume = function () {
              (d.prototype.resume.apply(this, arguments), this._input.resume());
            }),
            (this.stream = function (e) {
              ((this._input = e),
                this._input.on("data", this._streamData),
                this._input.on("end", this._streamEnd),
                this._input.on("error", this._streamError));
            }),
            (this._checkIsFinished = function () {
              r && t.length === 1 && (this._finished = !0);
            }),
            (this._nextChunk = function () {
              (this._checkIsFinished(),
                t.length ? this.parseChunk(t.shift()) : (n = !0));
            }),
            (this._streamData = k(function (e) {
              try {
                (t.push(
                  typeof e == "string" ? e : e.toString(this._config.encoding),
                ),
                  n &&
                    ((n = !1),
                    this._checkIsFinished(),
                    this.parseChunk(t.shift())));
              } catch (e) {
                this._streamError(e);
              }
            }, this)),
            (this._streamError = k(function (e) {
              (this._streamCleanUp(), this._sendError(e));
            }, this)),
            (this._streamEnd = k(function () {
              (this._streamCleanUp(), (r = !0), this._streamData(""));
            }, this)),
            (this._streamCleanUp = k(function () {
              (this._input.removeListener("data", this._streamData),
                this._input.removeListener("end", this._streamEnd),
                this._input.removeListener("error", this._streamError));
            }, this)));
        }
        ((f.prototype = Object.create(d.prototype)),
          (f.prototype.constructor = f));
        function g(e) {
          var t = {}.Duplex,
            n = E(e),
            r = !0,
            o = !1,
            a = [],
            i = null;
          ((this._onCsvData = function (e) {
            var t = e.data;
            !i.push(t) && !this._handle.paused() && this._handle.pause();
          }),
            (this._onCsvComplete = function () {
              i.push(null);
            }),
            (n.step = k(this._onCsvData, this)),
            (n.complete = k(this._onCsvComplete, this)),
            d.call(this, n),
            (this._nextChunk = function () {
              (o && a.length === 1 && (this._finished = !0),
                a.length ? a.shift()() : (r = !0));
            }),
            (this._addToParseQueue = function (e, t) {
              (a.push(
                k(function () {
                  if (
                    (this.parseChunk(
                      typeof e == "string" ? e : e.toString(n.encoding),
                    ),
                    I(t))
                  )
                    return t();
                }, this),
              ),
                r && ((r = !1), this._nextChunk()));
            }),
            (this._onRead = function () {
              this._handle.paused() && this._handle.resume();
            }),
            (this._onWrite = function (e, t, n) {
              this._addToParseQueue(e, n);
            }),
            (this._onWriteComplete = function () {
              ((o = !0), this._addToParseQueue(""));
            }),
            (this.getStream = function () {
              return i;
            }),
            (i = new t({
              readableObjectMode: !0,
              decodeStrings: !1,
              read: k(this._onRead, this),
              write: k(this._onWrite, this),
            })),
            i.once("finish", k(this._onWriteComplete, this)));
        }
        typeof PAPA_BROWSER_CONTEXT == "undefined" &&
          ((g.prototype = Object.create(d.prototype)),
          (g.prototype.constructor = g));
        function h(e) {
          var t = Math.pow(2, 53),
            n = -t,
            r = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
            o =
              /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
            a = this,
            i = 0,
            s = 0,
            u,
            c,
            d = !1,
            m = !1,
            p,
            _ = [],
            f = { data: [], errors: [], meta: {} };
          if (I(e.step)) {
            var g = e.step;
            e.step = function (t) {
              if (((f = t), S())) v();
              else {
                if ((v(), f.data.length === 0)) return;
                ((i += t.data.length),
                  e.preview && i > e.preview
                    ? c.abort()
                    : ((f.data = f.data[0]), g(f, a)));
              }
            };
          }
          ((this.parse = function (t, n, r) {
            var o = e.quoteChar || '"';
            if ((e.newline || (e.newline = x(t, o)), (p = !1), e.delimiter))
              I(e.delimiter) &&
                ((e.delimiter = e.delimiter(t)),
                (f.meta.delimiter = e.delimiter));
            else {
              var a = D(
                t,
                e.newline,
                e.skipEmptyLines,
                e.comments,
                e.delimitersToGuess,
              );
              (a.successful
                ? (e.delimiter = a.bestDelimiter)
                : ((p = !0), (e.delimiter = l.DefaultDelimiter)),
                (f.meta.delimiter = e.delimiter));
            }
            var i = E(e);
            return (
              e.preview && e.header && i.preview++,
              (u = t),
              (c = new C(i)),
              (f = c.parse(u, n, r)),
              v(),
              d ? { meta: { paused: !0 } } : f || { meta: { paused: !1 } }
            );
          }),
            (this.paused = function () {
              return d;
            }),
            (this.pause = function () {
              ((d = !0),
                c.abort(),
                (u = I(e.chunk) ? "" : u.substring(c.getCharIndex())));
            }),
            (this.resume = function () {
              a.streamer._halted
                ? ((d = !1), a.streamer.parseChunk(u, !0))
                : setTimeout(a.resume, 3);
            }),
            (this.aborted = function () {
              return m;
            }),
            (this.abort = function () {
              ((m = !0),
                c.abort(),
                (f.meta.aborted = !0),
                I(e.complete) && e.complete(f),
                (u = ""));
            }));
          function h(t) {
            return e.skipEmptyLines === "greedy"
              ? t.join("").trim() === ""
              : t.length === 1 && t[0].length === 0;
          }
          function b(e) {
            if (r.test(e)) {
              var o = parseFloat(e);
              if (o > n && o < t) return !0;
            }
            return !1;
          }
          function v() {
            return (
              f &&
                p &&
                ($(
                  "Delimiter",
                  "UndetectableDelimiter",
                  "Unable to auto-detect delimiting character; defaulted to '" +
                    l.DefaultDelimiter +
                    "'",
                ),
                (p = !1)),
              e.skipEmptyLines &&
                (f.data = f.data.filter(function (e) {
                  return !h(e);
                })),
              S() && R(),
              T()
            );
          }
          function S() {
            return e.header && _.length === 0;
          }
          function R() {
            if (!f) return;
            function t(t, n) {
              (I(e.transformHeader) && (t = e.transformHeader(t, n)),
                _.push(t));
            }
            if (Array.isArray(f.data[0])) {
              for (var n = 0; S() && n < f.data.length; n++)
                f.data[n].forEach(t);
              f.data.splice(0, 1);
            } else f.data.forEach(t);
          }
          function L(t) {
            return (
              e.dynamicTypingFunction &&
                e.dynamicTyping[t] === void 0 &&
                (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
              (e.dynamicTyping[t] || e.dynamicTyping) === !0
            );
          }
          function k(e, t) {
            return L(e)
              ? t === "true" || t === "TRUE"
                ? !0
                : t === "false" || t === "FALSE"
                  ? !1
                  : b(t)
                    ? parseFloat(t)
                    : o.test(t)
                      ? new Date(t)
                      : t === ""
                        ? null
                        : t
              : t;
          }
          function T() {
            if (!f || (!e.header && !e.dynamicTyping && !e.transform)) return f;
            function t(t, n) {
              var r = e.header ? {} : [],
                o;
              for (o = 0; o < t.length; o++) {
                var a = o,
                  i = t[o];
                (e.header && (a = o >= _.length ? "__parsed_extra" : _[o]),
                  e.transform && (i = e.transform(i, a)),
                  (i = k(a, i)),
                  a === "__parsed_extra"
                    ? ((r[a] = r[a] || []), r[a].push(i))
                    : (r[a] = i));
              }
              return (
                e.header &&
                  (o > _.length
                    ? $(
                        "FieldMismatch",
                        "TooManyFields",
                        "Too many fields: expected " +
                          _.length +
                          " fields but parsed " +
                          o,
                        s + n,
                      )
                    : o < _.length &&
                      $(
                        "FieldMismatch",
                        "TooFewFields",
                        "Too few fields: expected " +
                          _.length +
                          " fields but parsed " +
                          o,
                        s + n,
                      )),
                r
              );
            }
            var n = 1;
            return (
              !f.data.length || Array.isArray(f.data[0])
                ? ((f.data = f.data.map(t)), (n = f.data.length))
                : (f.data = t(f.data, 0)),
              e.header && f.meta && (f.meta.fields = _),
              (s += n),
              f
            );
          }
          function D(t, n, r, o, a) {
            var i, s, u, c;
            a = a || [",", "	", "|", ";", l.RECORD_SEP, l.UNIT_SEP];
            for (var d = 0; d < a.length; d++) {
              var m = a[d],
                p = 0,
                _ = 0,
                f = 0;
              u = void 0;
              for (
                var g = new C({
                    comments: o,
                    delimiter: m,
                    newline: n,
                    preview: 10,
                  }).parse(t),
                  y = 0;
                y < g.data.length;
                y++
              ) {
                if (r && h(g.data[y])) {
                  f++;
                  continue;
                }
                var b = g.data[y].length;
                if (((_ += b), typeof u == "undefined")) {
                  u = b;
                  continue;
                } else b > 0 && ((p += Math.abs(b - u)), (u = b));
              }
              (g.data.length > 0 && (_ /= g.data.length - f),
                (typeof s == "undefined" || p <= s) &&
                  (typeof c == "undefined" || _ > c) &&
                  _ > 1.99 &&
                  ((s = p), (i = m), (c = _)));
            }
            return ((e.delimiter = i), { successful: !!i, bestDelimiter: i });
          }
          function x(e, t) {
            e = e.substring(0, 1024 * 1024);
            var n = new RegExp(y(t) + "([^]*?)" + y(t), "gm");
            e = e.replace(n, "");
            var r = e.split("\r"),
              o = e.split("\n"),
              a = o.length > 1 && o[0].length < r[0].length;
            if (r.length === 1 || a) return "\n";
            for (var i = 0, l = 0; l < r.length; l++) r[l][0] === "\n" && i++;
            return i >= r.length / 2 ? "\r\n" : "\r";
          }
          function $(e, t, n, r) {
            var o = { type: e, code: t, message: n };
            (r !== void 0 && (o.row = r), f.errors.push(o));
          }
        }
        function y(e) {
          return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function C(e) {
          e = e || {};
          var t = e.delimiter,
            n = e.newline,
            r = e.comments,
            o = e.step,
            a = e.preview,
            i = e.fastMode,
            s;
          e.quoteChar === void 0 || e.quoteChar === null
            ? (s = '"')
            : (s = e.quoteChar);
          var u = s;
          if (
            (e.escapeChar !== void 0 && (u = e.escapeChar),
            (typeof t != "string" || l.BAD_DELIMITERS.indexOf(t) > -1) &&
              (t = ","),
            r === t)
          )
            throw new Error("Comment character same as delimiter");
          (r === !0
            ? (r = "#")
            : (typeof r != "string" || l.BAD_DELIMITERS.indexOf(r) > -1) &&
              (r = !1),
            n !== "\n" && n !== "\r" && n !== "\r\n" && (n = "\n"));
          var c = 0,
            d = !1;
          ((this.parse = function (l, m, p) {
            if (typeof l != "string") throw new Error("Input must be a string");
            var _ = l.length,
              f = t.length,
              g = n.length,
              h = r.length,
              C = I(o);
            c = 0;
            var b = [],
              v = [],
              S = [],
              R = 0;
            if (!l) return X();
            if (e.header && !m) {
              var L = l.split(n)[0],
                E = L.split(t),
                k = "_",
                T = [],
                D = {},
                x = !1;
              for (var $ in E) {
                var P = E[$];
                I(e.transformHeader) && (P = e.transformHeader(P, $));
                var N = P,
                  M = D[P] || 0;
                for (
                  M > 0 && ((x = !0), (N = P + k + M)), D[P] = M + 1;
                  T.includes(N);
                )
                  N = N + k + M;
                T.push(N);
              }
              if (x) {
                var w = l.split(n);
                ((w[0] = T.join(t)), (l = w.join(n)));
              }
            }
            if (i || (i !== !1 && l.indexOf(s) === -1)) {
              for (var A = l.split(n), F = 0; F < A.length; F++) {
                if (((S = A[F]), (c += S.length), F !== A.length - 1))
                  c += n.length;
                else if (p) return X();
                if (!(r && S.substring(0, h) === r)) {
                  if (C) {
                    if (((b = []), z(S.split(t)), Y(), d)) return X();
                  } else z(S.split(t));
                  if (a && F >= a) return ((b = b.slice(0, a)), X(!0));
                }
              }
              return X();
            }
            for (
              var O = l.indexOf(t, c),
                B = l.indexOf(n, c),
                W = new RegExp(y(u) + y(s), "g"),
                q = l.indexOf(s, c);
              ;
            ) {
              if (l[c] === s) {
                for (q = c, c++; ; ) {
                  if (((q = l.indexOf(s, q + 1)), q === -1))
                    return (
                      p ||
                        v.push({
                          type: "Quotes",
                          code: "MissingQuotes",
                          message: "Quoted field unterminated",
                          row: b.length,
                          index: c,
                        }),
                      K()
                    );
                  if (q === _ - 1) {
                    var U = l.substring(c, q).replace(W, s);
                    return K(U);
                  }
                  if (s === u && l[q + 1] === u) {
                    q++;
                    continue;
                  }
                  if (!(s !== u && q !== 0 && l[q - 1] === u)) {
                    (O !== -1 && O < q + 1 && (O = l.indexOf(t, q + 1)),
                      B !== -1 && B < q + 1 && (B = l.indexOf(n, q + 1)));
                    var V = B === -1 ? O : Math.min(O, B),
                      H = j(V);
                    if (l.substr(q + 1 + H, f) === t) {
                      (S.push(l.substring(c, q).replace(W, s)),
                        (c = q + 1 + H + f),
                        l[q + 1 + H + f] !== s && (q = l.indexOf(s, c)),
                        (O = l.indexOf(t, c)),
                        (B = l.indexOf(n, c)));
                      break;
                    }
                    var G = j(B);
                    if (l.substring(q + 1 + G, q + 1 + G + g) === n) {
                      if (
                        (S.push(l.substring(c, q).replace(W, s)),
                        Q(q + 1 + G + g),
                        (O = l.indexOf(t, c)),
                        (q = l.indexOf(s, c)),
                        C && (Y(), d))
                      )
                        return X();
                      if (a && b.length >= a) return X(!0);
                      break;
                    }
                    (v.push({
                      type: "Quotes",
                      code: "InvalidQuotes",
                      message: "Trailing quote on quoted field is malformed",
                      row: b.length,
                      index: c,
                    }),
                      q++);
                  }
                }
                continue;
              }
              if (r && S.length === 0 && l.substring(c, c + h) === r) {
                if (B === -1) return X();
                ((c = B + g), (B = l.indexOf(n, c)), (O = l.indexOf(t, c)));
                continue;
              }
              if (O !== -1 && (O < B || B === -1)) {
                (S.push(l.substring(c, O)), (c = O + f), (O = l.indexOf(t, c)));
                continue;
              }
              if (B !== -1) {
                if ((S.push(l.substring(c, B)), Q(B + g), C && (Y(), d)))
                  return X();
                if (a && b.length >= a) return X(!0);
                continue;
              }
              break;
            }
            return K();
            function z(e) {
              (b.push(e), (R = c));
            }
            function j(e) {
              var t = 0;
              if (e !== -1) {
                var n = l.substring(q + 1, e);
                n && n.trim() === "" && (t = n.length);
              }
              return t;
            }
            function K(e) {
              return (
                p ||
                  (typeof e == "undefined" && (e = l.substring(c)),
                  S.push(e),
                  (c = _),
                  z(S),
                  C && Y()),
                X()
              );
            }
            function Q(e) {
              ((c = e), z(S), (S = []), (B = l.indexOf(n, c)));
            }
            function X(e) {
              return {
                data: b,
                errors: v,
                meta: {
                  delimiter: t,
                  linebreak: n,
                  aborted: d,
                  truncated: !!e,
                  cursor: R + (m || 0),
                },
              };
            }
            function Y() {
              (o(X()), (b = []), (v = []));
            }
          }),
            (this.abort = function () {
              d = !0;
            }),
            (this.getCharIndex = function () {
              return c;
            }));
        }
        function b() {
          if (!l.WORKERS_SUPPORTED) return !1;
          var e = n(),
            r = new t.Worker(e);
          return ((r.onmessage = v), (r.id = i++), (a[r.id] = r), r);
        }
        function v(e) {
          var t = e.data,
            n = a[t.workerId],
            r = !1;
          if (t.error) n.userError(t.error, t.file);
          else if (t.results && t.results.data) {
            var o = function () {
                ((r = !0),
                  S(t.workerId, {
                    data: [],
                    errors: [],
                    meta: { aborted: !0 },
                  }));
              },
              i = { abort: o, pause: R, resume: R };
            if (I(n.userStep)) {
              for (
                var l = 0;
                l < t.results.data.length &&
                (n.userStep(
                  {
                    data: t.results.data[l],
                    errors: t.results.errors,
                    meta: t.results.meta,
                  },
                  i,
                ),
                !r);
                l++
              );
              delete t.results;
            } else
              I(n.userChunk) &&
                (n.userChunk(t.results, i, t.file), delete t.results);
          }
          t.finished && !r && S(t.workerId, t.results);
        }
        function S(e, t) {
          var n = a[e];
          (I(n.userComplete) && n.userComplete(t), n.terminate(), delete a[e]);
        }
        function R() {
          throw new Error("Not implemented.");
        }
        function L(e) {
          var n = e.data;
          if (
            (typeof l.WORKER_ID == "undefined" &&
              n &&
              (l.WORKER_ID = n.workerId),
            typeof n.input == "string")
          )
            t.postMessage({
              workerId: l.WORKER_ID,
              results: l.parse(n.input, n.config),
              finished: !0,
            });
          else if (
            (t.File && n.input instanceof File) ||
            n.input instanceof Object
          ) {
            var r = l.parse(n.input, n.config);
            r &&
              t.postMessage({
                workerId: l.WORKER_ID,
                results: r,
                finished: !0,
              });
          }
        }
        function E(e) {
          if (typeof e != "object" || e === null) return e;
          var t = Array.isArray(e) ? [] : {};
          for (var n in e) t[n] = E(e[n]);
          return t;
        }
        function k(e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }
        function I(e) {
          return typeof e == "function";
        }
        return l;
      });
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
