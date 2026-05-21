# Design System — Guia de Criação de Telas

## Aprendizados Operacionais

- Neste projeto, sempre rode `nvm use 24` antes de qualquer comando `npm`, `next` ou `prisma`.
- Considere Node 24 como requisito operacional padrão, mesmo quando a máquina tiver outras versões instaladas.

Use este arquivo como instrução para qualquer IA criar telas no mesmo padrão visual. Cole o conteúdo abaixo no início do seu prompt.

---

## Prompt base (cole isso antes de qualquer pedido de tela)

> Siga rigorosamente o design system abaixo ao criar qualquer tela ou componente.

---

## 1. Princípios gerais

- O tema é **sempre claro** (light only). Sem dark mode.
- Fundo da página: **branco puro** (`#ffffff` / `bg-white`). Sem tons cinza no fundo.
- O card ou container principal se destaca do fundo por meio de **borda preta**, não por cor de fundo diferente.
- Visual **limpo, minimalista e tipográfico**. Sem gradientes, sombras pesadas, cores vibrantes ou efeitos decorativos.
- Cada tela deve ter **uma hierarquia visual clara**: o que é título, o que é subtítulo, o que é ação principal, o que é rodapé.

---

## 2. Cores

| Uso                            | Valor Tailwind     | Hex       |
| ------------------------------ | ------------------ | --------- |
| Fundo da página                | `bg-white`         | `#ffffff` |
| Fundo do card                  | `bg-white`         | `#ffffff` |
| Borda do card                  | `border-zinc-900`  | `#18181b` |
| Borda de inputs e botões       | `border-zinc-900`  | `#18181b` |
| Divisores e linhas             | `bg-zinc-900`      | `#18181b` |
| Texto principal                | `text-zinc-900`    | `#18181b` |
| Texto secundário / subtítulo   | `text-zinc-500`    | `#71717a` |
| Texto terciário / rodapé       | `text-zinc-400`    | `#a1a1aa` |
| Hover de botão / área clicável | `hover:bg-gray-50` | `#f9fafb` |

Regra: **preto para estrutura, cinza para hierarquia de texto**. Sem azuis, verdes ou qualquer cor de destaque salvo ícones de terceiros (ex: logo do Google).

---

## 3. Tipografia

- **Título principal**: `font-serif text-2xl text-zinc-900` — use uma fonte serifada para dar personalidade. Ex: `font-serif` do Tailwind ou `DM Serif Display`.
- **Subtítulo / descrição**: `text-sm text-zinc-500 font-light` — leve, discreto.
- **Labels e textos de UI**: `text-sm font-medium text-zinc-800` — sans-serif, peso médio.
- **Rodapé / termos**: `text-xs text-zinc-400` — mínimo, não compete com o conteúdo.
- **Nunca use**: Inter, Roboto, Arial como fonte de display. Prefira pares como `DM Serif Display` + `DM Sans`.

---

## 4. Espaçamento

- Padding interno do card: `p-10` (40px).
- Gap entre seções internas do card: `gap-6` (24px).
- Gap entre botões empilhados: `gap-2.5` (10px).
- Largura máxima do card de formulário/autenticação: `max-w-sm` (384px), centralizado com `mx-auto`.
- Usar `space-y-1.5` para agrupar título + subtítulo.

---

## 5. Componentes

### Card container

```tsx
<div className="w-full max-w-sm bg-white border border-zinc-900 rounded-2xl p-10 flex flex-col items-center gap-6">
```

### Botão principal (ação de login, submit, etc.)

```tsx
<button className="w-full flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl border border-zinc-900 bg-white hover:bg-gray-50 text-zinc-800 text-sm font-medium transition-colors duration-150">
  Texto do botão
</button>
```

### Divisor com label central

```tsx
<div className="w-full flex items-center gap-3">
  <span className="flex-1 h-px bg-zinc-900" />
  <p className="text-xs text-zinc-400">ou</p>
  <span className="flex-1 h-px bg-zinc-900" />
</div>
```

### Input de texto

```tsx
<input
  type="text"
  placeholder="seu@email.com"
  className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 bg-white text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition"
/>
```

### Logo / ícone de identidade no topo do card

```tsx
<div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center">
  {/* SVG ou ícone em fill-white */}
</div>
```

### Título + subtítulo

```tsx
<div className="text-center space-y-1.5">
  <h1 className="font-serif text-2xl text-zinc-900 leading-snug">
    Título aqui
  </h1>
  <p className="text-sm text-zinc-500 font-light">Descrição curta e objetiva</p>
</div>
```

### Link de rodapé / termos

```tsx
<p className="text-xs text-zinc-400 text-center leading-relaxed">
  Texto de apoio com{" "}
  <a href="#" className="underline underline-offset-2 hover:text-zinc-600">
    link
  </a>
</p>
```

---

## 6. Bordas e arredondamento

| Elemento        | Classe                         |
| --------------- | ------------------------------ |
| Card principal  | `rounded-2xl`                  |
| Botões e inputs | `rounded-xl`                   |
| Logo / avatar   | `rounded-xl` ou `rounded-full` |
| Badges pequenos | `rounded-md`                   |

Regra: **quanto menor o elemento, menor o raio**. Nunca use `rounded-full` em botões de ação.

---

## 7. O que nunca fazer

- Não usar `bg-gray-800`, `bg-gray-900` ou qualquer cor escura como fundo de botão.
- Não usar gradientes (`bg-gradient-*`).
- Não usar `shadow-md`, `shadow-lg` ou similares — profundidade vem da borda, não da sombra.
- Não usar `dark:` — o sistema é light only.
- Não usar `text-white` em botões (fundo é sempre branco).
- Não usar cores de destaque (azul, verde, vermelho) para estrutura — apenas para ícones externos.
- Não centralizar texto em campos de formulário.
- Não empilhar mais de 2 botões sem um divisor entre grupos.

---

## 8. Layout de página

```tsx
// Wrapper padrão para páginas de formulário/auth
<div className="min-h-screen flex items-center justify-center px-4">
  {/* card aqui */}
</div>

// Wrapper padrão para páginas de conteúdo
<main className="max-w-2xl mx-auto px-6 py-16">
  {/* conteúdo aqui */}
</main>
```

---

## 9. Exemplo completo — tela de login

```tsx
export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white border border-zinc-900 rounded-2xl p-10 flex flex-col items-center gap-6">
        <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        <div className="text-center space-y-1.5">
          <h1 className="font-serif text-2xl text-zinc-900 leading-snug">
            Bem-vindo de volta
          </h1>
          <p className="text-sm text-zinc-500 font-light">
            Acesse ou crie sua conta para continuar
          </p>
        </div>

        <div className="w-full flex items-center gap-3">
          <span className="flex-1 h-px bg-zinc-900" />
          <p className="text-xs text-zinc-400">Entrar com</p>
          <span className="flex-1 h-px bg-zinc-900" />
        </div>

        <div className="w-full flex flex-col gap-2.5">
          <button className="w-full flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl border border-zinc-900 bg-white hover:bg-gray-50 text-zinc-800 text-sm font-medium transition-colors duration-150">
            Entrar com Google
          </button>
        </div>

        <p className="text-xs text-zinc-400 text-center leading-relaxed">
          Ao continuar, você concorda com os{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-zinc-600"
          >
            Termos de uso
          </a>{" "}
          e a{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-zinc-600"
          >
            Política de privacidade
          </a>
        </p>
      </div>
    </div>
  );
}
```

---

## 10. Checklist antes de entregar qualquer tela

- [ ] Fundo da página é branco puro
- [ ] Card tem borda `border-zinc-900` visível
- [ ] Sem dark mode (`dark:`)
- [ ] Sem gradientes ou sombras
- [ ] Título usa fonte serifada
- [ ] Subtítulo é `text-zinc-500 font-light`
- [ ] Botões têm borda preta e fundo branco
- [ ] Divisores são linhas pretas (`bg-zinc-900`)
- [ ] Textos de rodapé são `text-zinc-400 text-xs`
- [ ] Espaçamento interno do card é `p-10` com `gap-6`
