import html from '../lib/core.js'
import { connect } from '../lib/store.js'

function Footer({ todos, filters, filter }) {
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                <li>
                    <a class="${filter === type && 'selected'}" href="#" onclick="dispatch('switchFilter', '${type}')">${type[0].toLocaleUpperCase() + type.slice(1)}</a>
                </li>
            `)}
            </ul>
            <button class="clear-completed" onclick="dispatch('clearCompleted')">${todos.filter(filters.completed).length > 0 && 'Clear completed'}</button>
        </footer>
    `
}

export default connect()(Footer)