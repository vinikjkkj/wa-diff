__d(
  "WAFlowsRichTextParser",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = S);
      var n = e;
      for (var r of t) n = r.apply(n);
      return n;
    }
    var l = function (t) {
        var e = t
          .trim()
          .split("\n")
          .reduce(function (e, t) {
            return e + "<li>" + t.substring(2) + "</li>";
          }, "");
        return "\n<ul>" + e + "</ul>";
      },
      s = function (t) {
        var e = t
          .trim()
          .split("\n")
          .reduce(function (e, t) {
            return e + "<li>" + t.substring(t.indexOf(".") + 2) + "</li>";
          }, "");
        return "\n<ol>" + e + "</ol>";
      },
      u = function (t, n, r, o) {
        var e = function (t) {
            return !!t.trim();
          },
          a = n
            .trim()
            .split("|")
            .filter(e)
            .map(function (e) {
              return "<th>" + e.trim() + "</th>";
            }),
          i = o
            .split("\n")
            .filter(Boolean)
            .map(function (t) {
              var n = t
                .split("|")
                .filter(e)
                .map(function (e) {
                  return "<td>" + e.trim() + "</td>";
                })
                .join("");
              return "<tr>" + n + "</tr>";
            });
        return (
          "<table><thead><tr>" +
          a.join("") +
          "</tr></thead><tbody>" +
          i.join("") +
          "</tbody></table>"
        )
          .trim()
          .concat("\n");
      },
      c = (function () {
        function e(e, t) {
          ((this.regexp = e), (this.replacer = t));
        }
        var t = e.prototype;
        return (
          (t.apply = function (t) {
            return t.replace(this.regexp, this.replacer);
          }),
          e
        );
      })(),
      d = (function () {
        function e(e, t) {
          ((this.name = e), (this.patterns = t));
        }
        var t = e.prototype;
        return (
          (t.apply = function (t) {
            return this.patterns.reduce(function (e, t) {
              return t.apply(e);
            }, t);
          }),
          e
        );
      })(),
      m = new d("image", [
        new c(
          /!\[([^\[]+)\]\((data:image\/png;base64),([^\)]+)\)/g,
          '<img src="$2,$3" alt="$1"></img>',
        ),
      ]),
      p = new d("link", [
        new c(/(^|[^!])\[([^\[]+)\]\(([^\)]+)\)/g, '$1<a href="$3">$2</a>'),
      ]),
      _ = new d("header", [
        new c(/^#{6}\s?([^\n]+)/gm, "<p>$1</p>"),
        new c(/^#{5}\s?([^\n]+)/gm, "<p>$1</p>"),
        new c(/^#{4}\s?([^\n]+)/gm, "<p>$1</p>"),
        new c(/^#{3}\s?([^\n]+)/gm, "<p>$1</p>"),
        new c(/^#{2}\s?([^\n]+)/gm, "<h2>$1</h2>"),
        new c(/^#{1}\s?([^\n]+)/gm, "<h1>$1</h1>"),
      ]),
      f = new d("table", [
        new c(/^(\|.+\|\r?\n)(\|[-:| ]+\|\r?\n)((?:\|.*\|\r?\n?)*)/gm, u),
      ]),
      g = new d("simple lists", [
        new c(/(?:^|\n)(?![^\n]*<[^>]*>)(\s*[0-9]+\.\s.*)+/g, s),
        new c(
          /(?:^|\n)(?![^\n]*<[^>]*>)(\s*[\-\+]\s.*(?:\n\s*[\-\+]\s.*)*)/g,
          l,
        ),
      ]),
      h = new d("mixed-text", [
        new c(
          /\*\*\*\~\~\s?((?:(?!<li>|<\/li>|<td>|<\/td>).)+?)\~\~\*\*\*/g,
          "<b><i><s>$1</s></i></b>",
        ),
        new c(
          /\~\~\*\*\*\s?((?:(?!<li>|<\/li>|<td>|<\/td>).)+?)\*\*\*\~\~/g,
          "<s><b><i>$1</i></b></s>",
        ),
        new c(
          /\~\~\*\*\s?((?:(?!<li>|<\/li>|<td>|<\/td>).)+?)\*\*\~\~/g,
          "<s><b>$1</b></s>",
        ),
        new c(/\*\*\~\~\s?([^\n]+?)\~\~\*\*/g, "<b><s>$1</s></b>"),
        new c(/\~\~\*\s?([^\n]+?)\*\~\~/g, "<s><i>$1</i></s>"),
        new c(
          /\*\~\~\s?((?:(?!<li>|<\/li>|<td>|<\/td>).)+?)\~\~\*/g,
          "<i><s>$1</s></i>",
        ),
        new c(/\*\*\*\s?([^\n]+?)\*\*\*/g, "<b><i>$1</i></b>"),
      ]),
      y = new d("paragraph", [
        new c(
          /^(?!#)(?!.*<\/?(ul|ol|img|h1|h2|p|table|tr|th|td)>)(.*\S.*)$/gm,
          "<p>$&</p>",
        ),
      ]),
      C = new d("bold", [new c(/\*\*(.+?)\*\*/g, "<b>$1</b>")]),
      b = new d("italic", [new c(/\*(.+?)\*/g, "<i>$1</i>")]),
      v = new d("strikethrough", [new c(/\~\~\s?([^\n]+?)\~\~/g, "<s>$1</s>")]),
      S = [m, p, _, f, g, h, y, h, C, b, v],
      R = [p, g, y, h, C, b, v],
      L = [p, y, h, C, b, v];
    ((i.parseRichText = e),
      (i.RICH_TEXT_RULES = S),
      (i.BASIC_TEXT_RULES = R),
      (i.CAPTION_TEXT_RULES = L));
  },
  66,
);
