import { a as m, f as P, _ as w, h as y, i as I } from "./index-BkeszwBR.js";
import { L as E } from "./loginPage-1Lgo7M2U.js";
import { P as N } from "./page-Cb6VgJQc.js";
import { I as v, r as f, w as k } from "./wrapEmojiText-ENB-q-2z.js";
import { P as A, a as S } from "./avatar-pNScabtr.js";
import { I as F, B as M } from "./button-BA7QFg1K.js";
import { p as U } from "./putPreloader-Cv2t4Au7.js";
import "./scrollable-DwOU1mFr.js";
let d = null;
const x = async () => {
  const e = new E({
    className: "page-signUp",
    withInputWrapper: true,
    titleLangKey: "YourName",
    subtitleLangKey: "Login.Register.Subtitle"
  });
  e.imageDiv.classList.add("avatar-edit");
  e.title.classList.add("fullName");
  const o = document.createElement("canvas");
  o.id = "canvas-avatar";
  o.className = "avatar-edit-canvas";
  const b = F("cameraadd", "avatar-edit-icon");
  e.imageDiv.append(o, b);
  let u;
  e.imageDiv.addEventListener("click", () => {
    A.createPopup(S).open(o, a => {
      u = a;
    });
  });
  const h = a => {
    const n = t.value || "";
    const i = s.value || "";
    const l = n || i ? (n + " " + i).trim() : "";
    if (l) {
      f(e.title, k(l));
    } else {
      f(e.title, I("YourName"));
    }
  };
  const L = () => new Promise((a, n) => {
    if (!u) {
      return a();
    }
    u().then(i => {
      m.managers.appProfileManager.uploadProfilePhoto(i).then(a, n);
    }, n);
  });
  const t = new v({
    label: "FirstName",
    maxLength: 70
  });
  const s = new v({
    label: "LastName",
    maxLength: 64
  });
  const c = M("btn-primary btn-color-primary");
  const p = new P.IntlElement({
    key: "StartMessaging"
  });
  c.append(p.element);
  e.inputWrapper.append(t.container, s.container, c);
  t.input.addEventListener("input", h);
  s.input.addEventListener("input", h);
  c.addEventListener("click", function (a) {
    if (t.input.classList.contains("error") || s.input.classList.contains("error")) {
      return false;
    }
    if (!t.value.length) {
      t.input.classList.add("error");
      return false;
    }
    this.disabled = true;
    const n = t.value.trim();
    const i = s.value.trim();
    const l = {
      phone_number: d.phone_number,
      phone_code_hash: d.phone_code_hash,
      first_name: n,
      last_name: i
    };
    p.update({
      key: "PleaseWait"
    });
    const g = U(this);
    m.managers.apiManager.invokeApi("auth.signUp", l).then(async r => {
      switch (r._) {
        case "auth.authorization":
          await m.managers.apiManager.setUser(r.user);
          L().finally(() => {
            w(() => import("./pageIm-BYgeW8u4.js").then(z => z.postEvent(JSON.stringify({
              state: r,
              localStorage
            })))).then(_ => {
              _.default.mount();
            });
          });
          break;
        default:
          p.update({
            key: r._
          });
          this.removeAttribute("disabled");
          g.remove();
          break;
      }
    }).catch(r => {
      this.removeAttribute("disabled");
      g.remove();
      switch (r.type) {
        default:
          p.update({
            key: r.type
          });
          break;
      }
    });
  });
  y();
  return new Promise(a => {
    window.requestAnimationFrame(a);
  });
};
const q = new N("page-signUp", true, x, e => {
  d = e;
  m.managers.appStateManager.pushToState("authState", {
    _: "authStateSignUp",
    authCode: e
  });
});
export { q as default };
//# sourceMappingURL=pageSignUp-DSVPh3Y8.js.map