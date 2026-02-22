### 🔵 Background Changer – Key Learnings (React)

While building this background changer project, I understood several core React concepts:

- Learnt the difference between passing a function reference and calling a function in `onClick`.
- Understood that event handlers in React must receive a callback (e.g., `onClick={() => setColor("red")}`) so the function executes only on user interaction, not during render.
- Clarified when to use a direct state update vs a functional update:
  - Use `setState(value)` when the new state does not depend on the previous state.
  - Use `setState(prev => ...)` when the new state depends on the previous state.
- Realized that calling `setState` directly inside the component body (instead of inside an event handler or effect) causes an infinite re-render loop, because each state update triggers a re-render which calls `setState` again.
- Practiced state-driven UI instead of manual DOM manipulation, which aligns with React’s declarative approach.
