# ESLint Configuration

This project uses ESLint with the modern flat config format for code linting and formatting.

## Configuration Structure

The configuration is defined in `eslint.config.mjs`:

```javascript
import antfu from '@antfu/eslint-config';

export default antfu({
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
  },
});
```

## Why This Structure?

### ES Module Format
- Uses `import`/`export` instead of CommonJS `require`/`module.exports`
- This is the modern standard for ESLint flat configs
- Better TypeScript support and tree-shaking

### @antfu/eslint-config
A comprehensive preset by Anthony Fu that includes:
- TypeScript support out of the box
- Vue/React rules (auto-detected based on dependencies)
- Import/export ordering and validation rules
- Stylistic formatting rules
- Sensible defaults for modern JavaScript/TypeScript projects

### Configuration Options

#### `formatters: true`
Enables built-in formatters for various file types:
- CSS/SCSS/Less
- HTML
- JSON/JSONC
- Markdown
- YAML

#### `stylistic`
Code style preferences:
- `indent: 2` - Enforces 2-space indentation
- `semi: true` - Requires semicolons at the end of statements

## Flat Config Benefits

1. **Simplified Configuration**: Single configuration object instead of complex extends/overrides chains
2. **Better TypeScript Support**: Native TypeScript integration without additional setup
3. **Predictable Rule Resolution**: More straightforward rule application and debugging
4. **Performance**: Faster configuration loading and rule processing
5. **Future-Proof**: ESLint 9+ recommended format, replacing legacy `.eslintrc.*` files

## Migration from Legacy Config

This flat config format replaces the older `.eslintrc.*` format and provides:
- More streamlined configuration
- Type-safe configuration options
- Easier to understand and maintain
- Better IDE integration